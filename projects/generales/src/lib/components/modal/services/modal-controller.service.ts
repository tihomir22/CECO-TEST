import { Injectable, EventEmitter } from "@angular/core";
import { ModalModel } from "../interface/ModalModel";
import * as JQ from "jquery";
import "bootstrap";
@Injectable({
  providedIn: "root",
})
export class ModalControllerService {
  public modalObj: ModalModel = {
    titulo: "",
    stringGuardar: "Guardar",
    tipoContenido: "texto",
    stringCerrar: "cerrar",
    actionsShow: { mostrarBtnAceptar: true, mostrarBtnCancelar: true },
  };
  public cerrarManualmente: EventEmitter<void> = new EventEmitter();
  constructor() {}

  public openDialog(dialogObj: ModalModel) {
    this.modalObj = dialogObj;
    JQ("#exampleModal3").modal();
    return this.cerrarManualmente.asObservable();
  }

  public aceptarBtn(): void {
    JQ("#exampleModal3").modal("hide");
    this.cerrarManualmente.emit();
  }
}
