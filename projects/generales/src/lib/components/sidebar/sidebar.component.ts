import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "lib-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigate(url: string) {
    this.router.navigate([url]);
  }
}
