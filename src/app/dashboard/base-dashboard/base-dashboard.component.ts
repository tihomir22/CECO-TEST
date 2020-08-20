import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductModel } from "projects/generales/src/lib/interfaces/ProductModel";
import { SnackbarControllerService } from "projects/generales/src/lib/services/snackbar-controller.service";
import { mergeMap } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-base-dashboard",
  templateUrl: "./base-dashboard.component.html",
  styleUrls: ["./base-dashboard.component.scss"],
})
export class BaseDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
