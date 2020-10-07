import { ComidaService } from "./../services/comida.service";
import { ModalComidaPage } from "./../modal-comida/modal-comida.page";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  public comidas = [];
  public varLoading = null;

  constructor(
    public modal: ModalController,
    public comidaService: ComidaService,
    public loading: LoadingController
  ) {}

  async ngOnInit() {
    await this.getComidas();
  }

  async abrirModalComida() {
    await this.showLoading();
    const modal = await this.modal.create({
      component: ModalComidaPage,
    });
    await this.hideLoading();
    return await modal.present();
  }

  async getComidas(): Promise<void> {
    await this.showLoading();
    setTimeout(async () => {
      this.comidas = await this.comidaService.getAll();
      await this.hideLoading();
    }, 1000);
  }

  async removerComida(key) {
    await this.comidaService.remove(key);
    await this.getComidas();
  }

  async editarComida(id: number): Promise<void> {
    await this.showLoading();
    const modal = await this.modal.create({
      component: ModalComidaPage,
      componentProps: {
        id,
      },
    });
    modal.onDidDismiss().then(
      async (): Promise<void> => {
        await this.getComidas();
      }
    );
    await this.hideLoading();
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
}
