import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FormPlaceholderInputNameAndType } from "./interfaces/LoginModel";
import * as $ from "jquery";
import { SnackbarControllerService } from "../../services/snackbar-controller.service";
import { Router } from "@angular/router";
@Component({
  selector: "lib-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public camposDeEntradaLogin: Array<FormPlaceholderInputNameAndType> = [];

  constructor(
    private snackbarController: SnackbarControllerService,
    private router: Router
  ) {
    this.camposDeEntradaLogin = [
      {
        formControlPlaceholder: "Nombre de usuario",
        formInputName: "Usuario",
        type: "text",
      },
      {
        formControlPlaceholder: "Contraseña",
        formInputName: "Contrasenya",
        type: "password",
      },
    ];
  }

  ngOnInit(): void {
    $(".submittingButton").click(() => {
      let nombreDeUsuario = this.obtenerInput(
        this.camposDeEntradaLogin[0].type,
        this.camposDeEntradaLogin[0].formInputName
      ).val();

      let contrasenya = this.obtenerInput(
        this.camposDeEntradaLogin[1].type,
        this.camposDeEntradaLogin[1].formInputName
      ).val();

      if (nombreDeUsuario === "admin" && contrasenya === "admin") {
        this.router.navigate(["dashboard"]);
        this.snackbarController.showSnackbar("SUCCESS", "Login exitoso");
      } else {
        this.snackbarController.showSnackbar(
          "ERROR",
          "Revise las credenciales"
        );
      }
    });
  }

  private obtenerInput(tipo: "password" | "text", nombre: string) {
    return $(`input[type=${tipo}][name=${nombre}]`);
  }
}
