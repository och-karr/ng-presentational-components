import { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';
import {NgStyle} from "@angular/common";

@NgModule({
    imports: [
        NgStyle
    ],
  declarations: [HeroComponent],
  providers: [],
  exports: [HeroComponent]
})
export class HeroComponentModule {
}
