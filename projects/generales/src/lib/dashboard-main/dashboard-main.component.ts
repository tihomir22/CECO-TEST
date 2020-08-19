import { Component, OnInit } from "@angular/core";
import { ProductModel } from "../interfaces/ProductModel";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { SnackbarControllerService } from "../services/snackbar-controller.service";
import { mergeMap, delay } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "lib-dashboard-main",
  templateUrl: "./dashboard-main.component.html",
  styleUrls: ["./dashboard-main.component.scss"],
})
export class DashboardMainComponent implements OnInit {
  public trendingProducts: Array<ProductModel> = [];
  private baseURL = "http://localhost:3000";
  constructor(
    private http: HttpClient,
    private snackbar: SnackbarControllerService
  ) {}

  ngOnInit(): void {
    this.loadTrendingProducts(6);
  }

  private loadTrendingProducts(maxTrendingProducts: number): void {
    this.http
      .get(`${this.baseURL}/products`)
      .pipe(
        mergeMap((listaProductos: Array<ProductModel>) => {
          let lista = listaProductos.sort(this.ordenarPorVentas);
          lista.length = maxTrendingProducts;
          return of(lista);
        })
      )
      .subscribe(
        (data: Array<ProductModel>) => {
          console.log(data);
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
}
