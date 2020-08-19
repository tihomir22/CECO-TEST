import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginWrapperComponent } from "../login-wrapper/login-wrapper.component";
import { BaseDashboardComponent } from "./base-dashboard/base-dashboard.component";

const routes: Routes = [
  { path: "", component: BaseDashboardComponent, children: [] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
