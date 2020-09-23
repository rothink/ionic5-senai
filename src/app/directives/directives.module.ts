import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextBlueDirective } from "./text-blue.directive";

@NgModule({
  declarations: [TextBlueDirective],
  imports: [CommonModule],
  exports: [TextBlueDirective],
})
export class DirectivesModule {}
