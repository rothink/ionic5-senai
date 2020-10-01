import { ModalComidaPage } from "./../modal-comida/modal-comida.page";
import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  constructor(private storage: Storage, public modal: ModalController) {
    console.info(storage);
    storage.set("herois", [{ nome: "Rodrigo" }]);

    // Or to get a key/value pair
    storage.get("herois").then((val) => {
      console.log("Your age is", val);
    });
  }

  async abrirModalComida() {
    const modal = await this.modal.create({
      component: ModalComidaPage,
    });
    return await modal.present();
  }
}
