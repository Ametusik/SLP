import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../shared/services/auth.service";
import {StorageService} from "../../../../shared/services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input() visibleLoginModal

  authForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  constructor(private authService: AuthService, private storageService: StorageService) {
  }


  auth(): void {
    let user = this.authForm.getRawValue()
    this.authService.login(user.login, user.password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        window.location.reload();
      },
    })
  }

}
