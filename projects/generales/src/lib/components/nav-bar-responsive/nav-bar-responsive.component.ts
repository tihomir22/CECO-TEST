import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "lib-nav-bar-responsive",
  templateUrl: "./nav-bar-responsive.component.html",
  styleUrls: ["./nav-bar-responsive.component.scss"],
})
export class NavBarResponsiveComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public logout() {
    this.router.navigate(["login"]);
  }
}
