import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { SnackbarControllerService } from "../../services/snackbar-controller.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductModel } from "../../interfaces/ProductModel";

@Component({
  selector: "lib-ficha-producto",
  templateUrl: "./ficha-producto.component.html",
  styleUrls: ["./ficha-producto.component.scss"],
})
export class FichaProductoComponent implements OnInit {
  public cargandoDatos: boolean = false;
  public _modoActualFormProducto: "NUEVO" | "EDICION" = "EDICION";
  public formGroupProducto: FormGroup;
  private productoCargado: ProductModel;
  private set modoActualFormProducto(val: "NUEVO" | "EDICION") {
    this._modoActualFormProducto = val;
    if (this._modoActualFormProducto == "EDICION") {
      this.formGroupProducto.get("id").disable();
    } else if (this._modoActualFormProducto == "NUEVO") {
      this.formGroupProducto.get("id").enable();
    }
  }
  private get modoActualFormProducto() {
    return this._modoActualFormProducto;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private snack: SnackbarControllerService,
    private fb: FormBuilder
  ) {
    this.formGroupProducto = this.fb.group({
      id: ["", [Validators.required]],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      precio: [0, [Validators.required]],
      image: ["", []],
    });
  }

  ngOnInit(): void {
    this.modoActualFormProducto = "NUEVO";
    let pretendienteId: any = this.activeRoute.snapshot.paramMap.get("id");
    if (pretendienteId != null && !Number.isNaN(pretendienteId)) {
      this.recuperarProducto(Number(pretendienteId));
    }
  }

  private recuperarProducto(productId: number) {
    this.cargandoDatos = true;
    this.http.get(`http://localhost:3000/products/${productId}`).subscribe(
      (data: ProductModel) => {
        this.cargandoDatos = false;
        this.formGroupProducto.patchValue({
          id: data.id,
          title: data.title,
          description: data.description,
          precio: data.precio,
          image: data.image,
        });
        this.productoCargado = data;
        this.modoActualFormProducto = "EDICION";
      },
      (error) => {
        this.snack.showSnackbar("ERROR", error.message);
        this.cargandoDatos = false;
      }
    );
  }

  public esNuevo(): boolean {
    return this.activeRoute.snapshot.paramMap.get("id") == null;
  }

  public guardarNuevo() {
    if (this.formGroupProducto.valid) {
      this.http
        .post("http://localhost:3000/products/", {
          id: this.formGroupProducto.value.id,
          title: this.formGroupProducto.value.title,
          description: this.formGroupProducto.value.description,
          precio: this.formGroupProducto.value.precio,
          image: this.formGroupProducto.value.image,
        } as ProductModel)
        .subscribe(
          (data: ProductModel) => {
            this.snack.showSnackbar("SUCCESS", "Creado con exito!");
            this.router.navigate(["dashboard/fichaProducto/" + data.id]);
          },
          (error) => {
            this.snack.showSnackbar("ERROR", error.message);
          }
        );
    } else {
      this.snack.showSnackbar("ERROR", "Todos los campos son obligatorios!");
    }
  }

  public guardarCambios() {
    this.formGroupProducto.markAllAsTouched();
    if (this.formGroupProducto.valid) {
      this.productoCargado = Object.assign(this.productoCargado, {
        title: this.formGroupProducto.value.title,
        description: this.formGroupProducto.value.description,
        precio: this.formGroupProducto.value.precio,
        image: this.formGroupProducto.value.image,
      } as ProductModel);
      this.http
        .put(
          "http://localhost:3000/products/" + this.productoCargado.id,
          this.productoCargado
        )
        .subscribe(
          (data) => {
            this.snack.showSnackbar("SUCCESS", "Actualizado con exito!");
          },
          (error) => {
            this.snack.showSnackbar("ERROR", error.message);
          }
        );
    } else {
      this.snack.showSnackbar("ERROR", "Todos los campos son obligatorios!");
    }
  }

  public eliminarProducto() {
    this.http
      .delete("http://localhost:3000/products/" + this.productoCargado.id)
      .subscribe(
        (data) => {
          this.snack.showSnackbar("SUCCESS", "Eliminado con exito");
          this.router.navigate(["dashboard/fichaProducto"]);
        },
        (error) => {
          this.snack.showSnackbar("ERROR", error.message);
        }
      );
  }

  public nuevo(): void {
    this.router.navigate(["dashboard/fichaProducto"], { replaceUrl: true });
  }

  public handleImageChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      this.snack.showSnackbar("ERROR", "Formato no valido");
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  private _handleReaderLoaded(e) {
    let reader = e.target;
    this.formGroupProducto.patchValue({ image: reader.result });
    console.log(this.formGroupProducto.value.image);
  }
}
