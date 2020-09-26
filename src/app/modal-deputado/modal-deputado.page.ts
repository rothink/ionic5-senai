import { Deputado } from "./../models/deputado";
import { ApiService } from "./../services/api.service";
import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-modal-deputado",
  templateUrl: "./modal-deputado.page.html",
  styleUrls: ["./modal-deputado.page.scss"],
})
export class ModalDeputadoPage implements OnInit {
  @Input() idDeputado: number;
  public deputado: Deputado;
  public carregando: any;

  constructor(
    private modal: ModalController,
    private api: ApiService,
    public loading: LoadingController
  ) {}

  ngOnInit() {
    this.buscarDeputado(this.idDeputado);
  }

  async showLoading() {
    this.carregando = await this.loading.create({
      message: "Aguarde ...",
    });
    await this.carregando.present();
  }

  async hideLoading() {
    await this.carregando.dismiss();
  }

  buscarDeputado(id: number) {
    this.showLoading();
    this.api.getDeputadoById(id).subscribe((res) => {
      this.deputado = res.dados;
      this.hideLoading();
    });
  }

  fecharModal(): void {
    this.modal.dismiss();
  }
}
