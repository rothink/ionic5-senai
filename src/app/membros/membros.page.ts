import { Membro } from "./../models/membro";
import { ApiService } from "./../services/api.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import { ModalDeputadoPage } from "../modal-deputado/modal-deputado.page";

@Component({
  selector: "app-membros",
  templateUrl: "./membros.page.html",
  styleUrls: ["./membros.page.scss"],
})
export class MembrosPage implements OnInit {
  idPartido: number;
  membros: Array<Membro> = [];
  varLoading = null;
  carregando = false;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    public loading: LoadingController,
    public modal: ModalController
  ) {}

  async ngOnInit() {
    this.carregando = true;
    await this.showLoading();
    this.idPartido = this.route.snapshot.params.id;
    await this.buscarMembrosDoPartido();
  }

  async abrirModal(idDeputado: number): Promise<void> {
    const modal = await this.modal.create({
      component: ModalDeputadoPage,
      componentProps: {
        idDeputado,
      },
    });
    return await modal.present();
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

  async buscarMembrosDoPartido(): Promise<void> {
    await this.apiService
      .getMembrosDoPartido(this.idPartido)
      .subscribe((response) => {
        this.membros = response.dados;
        this.carregando = false;
      });
    await this.hideLoading();
  }
}
