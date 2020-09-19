import { ApiService } from "./../services/api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  constructor(public apiService: ApiService) {}

  public partidos = [];

  ngOnInit() {
    this.apiService.getPartidos().subscribe((res) => {
      this.partidos = res.dados;
    });
  }
}
