import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseDashboardComponent } from "./base-dashboard/base-dashboard.component";
import { DashboardRoutingModule } from "./dashboard-ruting";
import { GeneralesModule } from "projects/generales/src/public-api";
import { FichaProductoWrapperComponent } from "./base-dashboard/ficha-producto-wrapper/ficha-producto-wrapper.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [BaseDashboardComponent, FichaProductoWrapperComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    GeneralesModule,
  ],
})
export class DashboardModule {}
