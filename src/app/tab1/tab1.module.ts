import { PipesModule } from "./../pipes/pipes.module";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { ButtonGoToLinkComponent } from "../button-go-to-link/button-go-to-link.component";

import { Tab1PageRoutingModule } from "./tab1-routing.module";
import { DirectivesModule } from "../directives/directives.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    PipesModule,
    DirectivesModule,
  ],
  declarations: [Tab1Page, ButtonGoToLinkComponent],
})
export class Tab1PageModule {}
