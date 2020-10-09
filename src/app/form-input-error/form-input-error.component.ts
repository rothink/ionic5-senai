import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
@Component({
  selector: "app-form-input-error",
  templateUrl: "./form-input-error.component.html",
  styleUrls: ["./form-input-error.component.scss"],
})
export class FormInputErrorComponent {
  constructor() {}

  @Input() form: FormGroup;
  @Input() formInput: string;

  get formInputError() {
    if (this.form.controls[this.formInput]) {
      const errors = this.form.controls[this.formInput].errors;
      for (const errorName in errors) {
        if (errors[errorName]) {
          switch (errorName) {
            case "required":
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
