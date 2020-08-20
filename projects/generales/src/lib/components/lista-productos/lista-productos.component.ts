import { Component, OnInit, ViewChildren } from "@angular/core";
import { ProductModel } from "../../interfaces/ProductModel";
import { HttpClient } from "@angular/common/http";
import { SnackbarControllerService } from "../../services/snackbar-controller.service";
import { mergeMap, max } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "lib-lista-productos",
  templateUrl: "./lista-productos.component.html",
  styleUrls: ["./lista-productos.component.scss"],
})
export class ListaProductosComponent implements OnInit {
  public trendingProducts: Array<ProductModel> = [];
  public removeLimit: boolean = false;
  private baseURL = "http://localhost:3000";
  constructor(
    private http: HttpClient,
    private snackbar: SnackbarControllerService
  ) {}

  ngOnInit(): void {
    this.loadTrendingProducts(6);
  }

  public loadTrendingProducts(maxTrendingProducts?: number): void {
    if (!maxTrendingProducts) maxTrendingProducts = this.removeLimit ? 100 : 6;
    this.http
      .get(`${this.baseURL}/products`)
      .pipe(
        mergeMap((listaProductos: Array<ProductModel>) => {
          let lista = listaProductos.sort(this.ordenarPorVentas);
          lista.length =
            maxTrendingProducts < lista.length
              ? maxTrendingProducts
              : lista.length;
          return of(lista);
        })
      )
      .subscribe(
        (data: Array<ProductModel>) => {
          this.trendingProducts = data;
        },
        (error) => {
          this.snackbar.showSnackbar("ERROR", error.message);
        }
      );
  }

  private ordenarPorVentas(
    productoA: ProductModel,
    productoB: ProductModel
  ): number {
    if (productoA.ventas > productoB.ventas) return -1;
    if (productoA.ventas < productoB.ventas) return 1;

    return 0;
  }

  public quitarLimitePorPagina() {
    document.querySelector(".closebtn").parentElement.style.display = "none";
    this.removeLimit = true;
    this.loadTrendingProducts(100);
  }
}
