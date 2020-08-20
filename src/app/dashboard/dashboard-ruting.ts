import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginWrapperComponent } from "../login-wrapper/login-wrapper.component";
import { BaseDashboardComponent } from "./base-dashboard/base-dashboard.component";
import { FichaProductoWrapperComponent } from "./base-dashboard/ficha-producto-wrapper/ficha-producto-wrapper.component";
import { ListaProductosComponent } from "projects/generales/src/lib/components/lista-productos/lista-productos.component";

const routes: Routes = [
  {
    path: "",
    component: BaseDashboardComponent,
    children: [
      {
        path: "",
        component: ListaProductosComponent,
      },
      {
        path: "fichaProducto",
        component: FichaProductoWrapperComponent,
      },
      {
        path: "fichaProducto/:id",
        component: FichaProductoWrapperComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
