import { NgModule } from '@angular/core';
import { AddressFormComponent } from './address-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        ReactiveFormsModule
    ],
  declarations: [AddressFormComponent],
  providers: [],
  exports: [AddressFormComponent]
})
export class AddressFormComponentModule {
}
