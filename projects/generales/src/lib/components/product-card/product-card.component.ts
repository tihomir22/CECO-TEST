import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProductModel } from "../../interfaces/ProductModel";
import { cloneDeep } from "lodash";
import { ButtonActionModel } from "../../interfaces/ButtonActions";
import { HttpClient } from "@angular/common/http";
import { SnackbarControllerService } from "../../services/snackbar-controller.service";
import { ModalControllerService } from "../modal/services/modal-controller.service";
import { Router } from "@angular/router";

@Component({
  selector: "lib-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  @Input("inputProducto") set inputProducto(producto: ProductModel) {
    if (producto) {
      this.productoRecibido = producto;
    }
  }

  @Output() refrescarProductos = new EventEmitter<void>();

  public productoRecibido: ProductModel;
  public accionesProducto: Array<ButtonActionModel> = [];
  public textLimitForPipeActualValue: number = 150;
  public textLimitForPipeDefaultValue: number = 150;
  public textLimitDisabled: number = -1;

  constructor(
    private modalCtrl: ModalControllerService,
    private http: HttpClient,
    private snack: SnackbarControllerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accionesProducto = [
      {
        color: "primary",
        icon: "eye",
        descripcion: "Ver imagen pantalla completa",
        action: () => {
          console.log("abrete");
          this.modalCtrl.openDialog({
            titulo: `Visualizando ${this.productoRecibido.title}`,
            contenido: this.productoRecibido.image,
            tipoContenido: "imagen",
            stringCerrar: "Cerrar",
            stringGuardar: "Eliminar",
            customClass: "fullScreenModal",
            actionsShow: { mostrarBtnAceptar: false, mostrarBtnCancelar: true },
          });
        },
      },
      {
        color: "secondary",
        icon: "pencil",
        descripcion: "Editar el producto seleccionado",
        action: () => {
          this.router.navigate([
            "dashboard/fichaProducto",
            this.productoRecibido.id,
          ]);
        },
      },
      {
        color: "danger",
        icon: "ban",
        descripcion: "Eliminar el producto seleccionado",
        action: () => {
          let suscripcion = this.modalCtrl
            .openDialog({
              titulo: `Seguro que seas eliminar ${this.productoRecibido.title} ?`,
              tipoContenido: "texto",
              stringCerrar: "Cerrar",
              stringGuardar: "Eliminar",
              actionsShow: {
                mostrarBtnAceptar: true,
                mostrarBtnCancelar: true,
              },
            })
            .subscribe((data) => {
              suscripcion.unsubscribe();
              this.eliminarProducto(this.productoRecibido);
            });
        },
      },
    ];
  }

  public toggleMostrarMasMostrarMenos(): void {
    if (this.estamosMostrandoMas()) {
      this.textLimitForPipeActualValue = cloneDeep(this.textLimitDisabled);
    } else {
      this.textLimitForPipeActualValue = cloneDeep(
        this.textLimitForPipeDefaultValue
      );
    }
  }

  public estamosMostrandoMas(): boolean {
    return (
      this.textLimitForPipeActualValue == this.textLimitForPipeDefaultValue
    );
  }

  private eliminarProducto(producto: ProductModel) {
    this.http.delete(`http://localhost:3000/products/${producto.id}`).subscribe(
      (data) => {
        this.snack.showSnackbar(
          "SUCCESS",
          "Eliminado con exito " + producto.title
        );
        this.refrescarProductos.emit();
      },
      (error) => {
        this.snack.showSnackbar("ERROR", error.message);
      }
    );
  }
}
