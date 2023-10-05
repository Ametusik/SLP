import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {StorageService} from "../../shared/services/storage.service";
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  visibleModal: boolean = false;
  canShowAlerts:boolean = false;

  authForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  constructor(private authService: AuthService, private storageService: StorageService) {
  }


  login(): void {
    let user = this.authForm.getRawValue()
    this.authService.login(user.login, user.password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        window.location.reload();
      },
    })
  }

  showModal() {
    this.visibleModal = true;
  }

}
