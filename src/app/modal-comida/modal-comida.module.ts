import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalComidaPageRoutingModule } from "./modal-comida-routing.module";

import { ModalComidaPage } from "./modal-comida.page";
import { FormInputErrorComponent } from "../form-input-error/form-input-error.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalComidaPageRoutingModule,
  ],
  declarations: [ModalComidaPage, FormInputErrorComponent],
  exports: [FormInputErrorComponent],
})
export class ModalComidaPageModule {}
