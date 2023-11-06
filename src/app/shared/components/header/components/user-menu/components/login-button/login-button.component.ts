import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthorizationService} from "../../../../../../../api/services/authorization.service";
import {LoginUserDto} from "../../../../../../../api/models/login-user-dto";
import {CreateUserDto} from "../../../../../../../api/models/create-user-dto";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  visibleModal: boolean = false;
  authForm: FormGroup = new FormGroup({
    'login': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  header: string = 'Авторизация';
  isLogin: boolean = true;

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {

  }


  showModal(): void {
    this.visibleModal = true;
  }

  setRegistration(): void {
    this.isLogin = false;
    // this.authForm.addControl('name', [Validators.required, Validators.minLength(4)]);
    this.authForm.addControl('name', new FormControl('', [Validators.required, Validators.minLength(4)]))
    this.header = 'Регистрация';

  }

  setLogin(): void {
    this.isLogin = true;
    this.authForm.removeControl('name');
    this.header = 'Авторизация';
  }

  auth(): void {
    if (this.isLogin) {
      let loginUserDto: LoginUserDto = (this.authForm.getRawValue());
      this.authorizationService.authLoginPost$Response({body: loginUserDto}).subscribe(data => {
        this.visibleModal = false;
        sessionStorage.setItem('JWT token',JSON.stringify(data.body));
      });


    } else {
      let createUserDto: CreateUserDto = {
        login: this.authForm.get('login').value,
        name: this.authForm.get('name').value,
        password: this.authForm.get('password').value
      }
      this.authorizationService.authRegisterPost$Response({body: createUserDto}).subscribe(data => {
        this.visibleModal = false;
        sessionStorage.setItem('JWT token',JSON.stringify(data.body));
      })
    }
  }
}
