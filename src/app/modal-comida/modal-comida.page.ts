import { ComidaService } from "./../services/comida.service";
import { ModalController } from "@ionic/angular";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoadingController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

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
    public loading: LoadingController,
    public toast: ToastController
  ) {
    this.form = formBuilder.group({
      /**
       * Validação com VALIDATORS
       */
      nome: ["", [Validators.required]],
      tipo: ["", [Validators.required]],
      descricao: ["", [Validators.required]],
      dataEntrega: ["", [Validators.required]],
      horaEntrega: ["", [Validators.required]],
      avaliacao: ["", [Validators.required]],
      isPimenta: ["", [Validators.required]],
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
    /**
     * Se o form form for inválido,
     * então apenas não segue o fluxo
     */
    if (!this.form.valid) {
      return;
    }
    await this.showLoading();
    await this.comidaService.salvarComida(this.form.value, this.id);
    await this.hideLoading();
    await this.mostrarMensagem();

    this.fecharModal();
  }

  async mostrarMensagem(): Promise<void> {
    if (this.id || this.id === 0) {
      await this.showToast("Comida atualizada com sucesso");
      return;
    }
    await this.showToast("Comida cadastrada com sucesso");
  }

  fecharModal(): void {
    this.modal.dismiss();
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

  async showToast(message: string): Promise<void> {
    const toast = await this.toast.create({
      message,
      duration: 2000,
      color: "success",
    });
    toast.present();
  }
}
