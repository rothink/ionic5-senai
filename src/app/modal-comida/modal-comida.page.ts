import { ComidaService } from "./../services/comida.service";
import { ModalController } from "@ionic/angular";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-modal-comida",
  templateUrl: "./modal-comida.page.html",
  styleUrls: ["./modal-comida.page.scss"],
})
export class ModalComidaPage implements OnInit {
  @Input() id: number;

  public form: FormGroup;
  public isEdit: boolean = false;
  public varLoading = null;

  constructor(
    private modal: ModalController,
    public formBuilder: FormBuilder,
    public comidaService: ComidaService,
    public loading: LoadingController
  ) {
    this.form = formBuilder.group({
      nome: [""],
      tipo: [""],
      descricao: [""],
      dataEntrega: [""],
      horaEntrega: [""],
      avaliacao: [""],
      isPimenta: [""],
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.id || this.id == 0) {
      this.isEdit = true;
      await this.preencherForm();
    }
  }

  async preencherForm(): Promise<void> {
    const comida = await this.comidaService.find(this.id);
    this.form.patchValue(comida);
  }

  async submitForm(): Promise<void> {
    await this.showLoading();
    await this.comidaService.salvarComida(this.form.value, this.id);
    await this.hideLoading();
  }

  fecharModal(): void {
    this.modal.dismiss();
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
