import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
@Component({
  selector: "app-form-input-error",
  templateUrl: "./form-input-error.component.html",
  styleUrls: ["./form-input-error.component.scss"],
})
/**
 * Criação de componente para retornar os erros do formulário
 */
export class FormInputErrorComponent {
  constructor() {}

  @Input() form: FormGroup;
  @Input() formInput: string;

  /**
   * Função que retorna o tipo específico do erro
   */
  get formInputError() {
    if (this.form.controls[this.formInput]) {
      const errors = this.form.controls[this.formInput].errors;
      for (const errorName in errors) {
        if (errors[errorName]) {
          /**
           * Verifica os tipos dos erros
           */
          switch (errorName) {
            case "required":
              /**
               * Se for do tipo REQUIRED (obrigatório),
               * então retorna o nome do campo, dizendo que é necessário preencher
               */
              return "O campo " + this.formInput + " é obrigatório";
            default:
              return this.form.controls[this.formInput].errors[errorName];
          }
        }
      }
      return null;
    }
  }
}
