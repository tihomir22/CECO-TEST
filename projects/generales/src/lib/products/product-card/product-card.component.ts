import { Component, OnInit, Input } from "@angular/core";
import { ProductModel } from "../../interfaces/ProductModel";
import { cloneDeep } from "lodash";

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

  public productoRecibido: ProductModel;
  public textLimitForPipeActualValue: number = 150;
  public textLimitForPipeDefaultValue: number = 150;
  public textLimitDisabled: number = -1;

  constructor() {}

  ngOnInit(): void {}

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
}
