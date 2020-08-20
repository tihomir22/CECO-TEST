import { NgModule } from "@angular/core";
import { GeneralesComponent } from "./generales.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LoginComponent } from "./components/login/login.component";
import { NavBarResponsiveComponent } from "./components/nav-bar-responsive/nav-bar-responsive.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { TextLimitPipe } from "./pipes/text-limit.pipe";
import { ModalComponent } from "./components/modal/modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ListaProductosComponent } from "./components/lista-productos/lista-productos.component";
import { FichaProductoComponent } from "./components/ficha-producto/ficha-producto.component";
import { FichaProductoWrapperComponent } from "src/app/dashboard/base-dashboard/ficha-producto-wrapper/ficha-producto-wrapper.component";

@NgModule({
  declarations: [
    GeneralesComponent,
    LoginComponent,
    NavBarResponsiveComponent,
    SidebarComponent,
    ProductCardComponent,
    TextLimitPipe,
    ModalComponent,
    ListaProductosComponent,
    FichaProductoComponent,
  ],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  exports: [
    GeneralesComponent,
    LoginComponent,
    NavBarResponsiveComponent,
    SidebarComponent,
    ModalComponent,
    FichaProductoComponent,
  ],
})
export class GeneralesModule {}
