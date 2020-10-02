import { ComidaService } from "./../services/comida.service";
import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-modal-comida",
  templateUrl: "./modal-comida.page.html",
  styleUrls: ["./modal-comida.page.scss"],
})
export class ModalComidaPage implements OnInit {
  public form: FormGroup;
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

  ngOnInit() {}

  submitForm() {
    this.comidaService.salvarComida(this.form.value);
  }

  fecharModal(): void {
    this.modal.dismiss();
  }
}
