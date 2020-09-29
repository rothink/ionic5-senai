import { Partido } from "./../models/partido";
import { ApiService } from "./../services/api.service";
import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  constructor(
    public apiService: ApiService,
    public loading: LoadingController
  ) {}

  public partidos: Array<Partido>;
  public page: number = 1;
  public links: any = [];
  public varLoading = null;

  ngOnInit() {
    this.getPartidos(this.page);
  }

  async getPartidos(page: number) {
    await this.showLoading();
    this.apiService.getPartidos(page).subscribe((res) => {
      this.partidos = res.dados;
      this.links = res.links;
      this.hideLoading();
    });
  }

  proximaPagina(): void {
    this.getPartidos(++this.page);
  }

  anteriorPagina(): void {
    this.getPartidos(--this.page);
  }

  temProximaPagina(): boolean {
    const verificacao = this.links.filter((link) => {
      return link.rel === "next";
    });
    return verificacao.length > 0;
  }

  async showLoading() {
    this.varLoading = await this.loading.create({
      message: "Aguarde ...",
    });
    await this.varLoading.present();
  }

  async hideLoading() {
    await this.varLoading.dismiss();
  }
}
