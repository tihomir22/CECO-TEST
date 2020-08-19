import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseDashboardComponent } from "./base-dashboard/base-dashboard.component";
import { DashboardRoutingModule } from "./dashboard-ruting";
import { GeneralesModule } from "projects/generales/src/public-api";

@NgModule({
  declarations: [BaseDashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, GeneralesModule],
})
export class DashboardModule {}
