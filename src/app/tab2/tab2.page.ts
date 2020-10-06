import { ComidaService } from "./../services/comida.service";
import { ModalComidaPage } from "./../modal-comida/modal-comida.page";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  public comidas = [];

  constructor(
    public modal: ModalController,
    public comidaService: ComidaService
  ) {}

  async ngOnInit() {
    await this.getComidas();
  }

  async abrirModalComida() {
    const modal = await this.modal.create({
      component: ModalComidaPage,
    });
    return await modal.present();
  }

  async getComidas() {
    this.comidas = await this.comidaService.getAll();
  }

  async removerComida(key) {
    await this.comidaService.remove(key);
    await this.getComidas();
  }

  async editarComida(id: number) {
    const modal = await this.modal.create({
      component: ModalComidaPage,
      componentProps: {
        id,
      },
    });
    return await modal.present();
  }
}
