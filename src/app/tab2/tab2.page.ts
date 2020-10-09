import { Comida } from "./../models/comida";
import { ComidaService } from "./../services/comida.service";
import { ModalComidaPage } from "./../modal-comida/modal-comida.page";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { LoadingController } from "@ionic/angular";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  public comidas: Array<Comida> = [];
  public varLoading = null;

  constructor(
    public modal: ModalController,
    public comidaService: ComidaService,
    public loading: LoadingController,
    public actionSheetController: ActionSheetController
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getComidas();
  }

  async abrirModalComida(): Promise<void> {
    await this.showLoading();
    const modal = await this.modal.create({
      component: ModalComidaPage,
    });
    modal.onDidDismiss().then(
      async (): Promise<void> => {
        await this.getComidas();
      }
    );
    await this.hideLoading();
    return await modal.present();
  }

  async getComidas(): Promise<void> {
    await this.showLoading();
    setTimeout(async (): Promise<void> => {
      this.comidas = await this.comidaService.getAll();
      await this.hideLoading();
    }, 1000);
  }

  async removerComida(key): Promise<void> {
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

  async showLoading(): Promise<void> {
    this.varLoading = await this.loading.create({
      message: "Aguarde ...",
    });
    await this.varLoading.present();
  }

  async hideLoading(): Promise<void> {
    await this.varLoading.dismiss();
  }

  async showActionDelete(id?: number): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: "Tem certeza que deseja remover?",
      buttons: [
        {
          text: "Sim",
          role: "destructive",
          icon: "trash",
          handler: async (): Promise<void> => {
            await this.removerComida(id);
          },
        },
        {
          text: "Cancelar",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
