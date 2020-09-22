import { TextToUpperPipe } from "./text-to-upper.pipe";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextToLowerPipe } from "./text-to-lower.pipe";

@NgModule({
  declarations: [TextToUpperPipe, TextToLowerPipe],
  exports: [TextToUpperPipe, TextToLowerPipe],
})
export class PipesModule {}
