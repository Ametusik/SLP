import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  exports: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class RegistrationModule { }
