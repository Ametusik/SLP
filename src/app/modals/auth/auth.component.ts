import {Component, OnInit} from '@angular/core';
import {PrimeIcons} from "primeng/api";
import {FormControl, FormGroup, ReactiveFormsModule, Validators,} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {StorageService} from "../../shared/services/storage.service";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  showLogin: boolean = false;
  showRegister: boolean = false;

  constructor() {
  }

  changeModal(){
    this.showLogin = !this.showLogin;
    this.showRegister = !this.showRegister
  }

}


