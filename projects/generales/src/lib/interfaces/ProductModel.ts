import { HttpErrorResponse } from "@angular/common/http";

export interface ProductModel {
  id: number;
  title: string;
  description: string;
  precio: number;
  ventas: number;
  image: string;
}
