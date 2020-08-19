import { NgModule } from "@angular/core";
import { GeneralesComponent } from "./generales.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DashboardMainComponent } from "./dashboard-main/dashboard-main.component";
import { NavBarResponsiveComponent } from "./dashboard-main/sub-comps/nav-bar-responsive/nav-bar-responsive.component";
import { SidebarComponent } from "./dashboard-main/sub-comps/sidebar/sidebar.component";
import { ProductCardComponent } from './products/product-card/product-card.component';
import { TextLimitPipe } from './pipes/text-limit.pipe';

@NgModule({
  declarations: [
    GeneralesComponent,
    LoginComponent,
    DashboardMainComponent,
    NavBarResponsiveComponent,
    SidebarComponent,
    ProductCardComponent,
    TextLimitPipe,
  ],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [
    GeneralesComponent,
    LoginComponent,
    DashboardMainComponent,
    NavBarResponsiveComponent,
    SidebarComponent,
  ],
})
export class GeneralesModule {}
