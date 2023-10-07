import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginUserDto} from "../../api/models/login-user-dto";
import {StorageService} from "../../shared/services/storage.service";
import {PrimeIcons} from "primeng/api";
import {AuthorizationService} from "../../api/services/authorization.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  visibleModal: boolean = false;
  canShowAlerts: boolean = false;

  authForm: FormGroup = new FormGroup({
    loginControl: new FormControl('', Validators.required),
    passwordControl: new FormControl('', Validators.required),
  });


  constructor(private authService: AuthorizationService, private storageService: StorageService, private router: Router) {
  }


  login(): void {
    let userLogin: string = this.authForm.get('loginControl').value;
    let userPassword: string = this.authForm.get('passwordControl').value;
    let user: LoginUserDto = {login: userLogin, password: userPassword}
    this.authService.authLoginPost({body: user}).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.router.navigate(['']);
        window.location.reload();
      },
    })
  }

  showModal(): void {
    this.visibleModal = true;
  }

}
