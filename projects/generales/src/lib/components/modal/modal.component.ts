import { Component, OnInit } from "@angular/core";
import { ModalControllerService } from "./services/modal-controller.service";
import { ModalModel } from "./interface/ModalModel";

@Component({
  selector: "lib-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  constructor(public modalController: ModalControllerService) {}

  ngOnInit(): void {}

  public aceptar(): void {
    this.modalController.aceptarBtn();
  }
}
