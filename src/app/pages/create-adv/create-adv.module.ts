import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateAdvComponent} from "./create-adv.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderModule} from "../../shared/components/header/header.module";
import {CreateAdvFormComponent} from './components/create-adv-form/create-adv-form.component';


@NgModule({
  declarations: [
    CreateAdvComponent,
    CreateAdvFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderModule,
    FormsModule,
  ]
})
export class CreateAdvModule {
}
