import { ModalComidaPage } from "./../modal-comida/modal-comida.page";
import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  constructor(public modal: ModalController) {}

  async abrirModalComida() {
    const modal = await this.modal.create({
      component: ModalComidaPage,
    });
    return await modal.present();
  }
}
