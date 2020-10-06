import { ComidaService } from "./../services/comida.service";
import { ModalController } from "@ionic/angular";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-modal-comida",
  templateUrl: "./modal-comida.page.html",
  styleUrls: ["./modal-comida.page.scss"],
})
export class ModalComidaPage implements OnInit {
  @Input() id: number;

  public form: FormGroup;
  public isEdit: boolean = false;

  constructor(
    private modal: ModalController,
    public formBuilder: FormBuilder,
    public comidaService: ComidaService
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

  async ngOnInit() {
    if (this.id || this.id == 0) {
      this.isEdit = true;
      await this.preencherForm();
    }
  }

  async preencherForm() {
    const comida = await this.comidaService.find(this.id);
    console.info(comida, "comida");
    this.form.patchValue(comida);
    console.info(comida, "comida");
  }

  async submitForm() {
    await this.comidaService.salvarComida(this.form.value, this.id);
  }

  fecharModal(): void {
    this.modal.dismiss();
  }
}
