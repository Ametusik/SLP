import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {StorageService} from "../../shared/services/storage.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  visibleModal: boolean = false;

  registrationForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(64)]),
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(64)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
  });

  constructor(private authService: AuthService, private storageService: StorageService) {
  }

  showModal(): void {
    this.visibleModal = true;
  }

  register(): void {
    let user = this.registrationForm.getRawValue();
    this.authService.register(user.name, user.login, user.password).subscribe({
      next: data => {
        this.authService.login(user.login, user.password).subscribe({
          next: data => {
            this.storageService.saveUser(data);
            window.location.reload();
          },
        })
      }
    })
  }


}

