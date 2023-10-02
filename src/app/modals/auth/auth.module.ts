import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {ToggleButtonModule} from "primeng/togglebutton";
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  exports: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    ToggleButtonModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class AuthModule { }
