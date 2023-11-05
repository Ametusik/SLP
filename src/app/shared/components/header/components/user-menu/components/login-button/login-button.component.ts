import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent {
  visibleModal: boolean = false;
  form: FormGroup = new FormGroup({
    'login': new FormControl('',[Validators.required,Validators.minLength(4)]),
    'password':new FormControl('',[Validators.required,Validators.minLength(8)])
  });

  constructor() {
  }


  showModal() {
    this.visibleModal = true;
  }
}
