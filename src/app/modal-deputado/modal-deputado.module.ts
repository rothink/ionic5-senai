import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalDeputadoPageRoutingModule } from "./modal-deputado-routing.module";

import { ModalDeputadoPage } from "./modal-deputado.page";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ModalDeputadoPageRoutingModule,
  ],
  declarations: [ModalDeputadoPage],
})
export class ModalDeputadoPageModule {}
