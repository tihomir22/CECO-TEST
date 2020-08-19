import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginWrapperComponent } from "./login-wrapper/login-wrapper.component";
import { GeneralesModule } from "projects/generales/src/public-api";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, LoginWrapperComponent],
  imports: [
    BrowserModule,
    GeneralesModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
