import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-adv-form',
  templateUrl: './create-adv-form.component.html',
  styleUrls: ['./create-adv-form.component.scss']
})
export class CreateAdvFormComponent {

  createAdvForm: FormGroup = new FormGroup({
    category: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    location: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    img: new FormControl(''),
    cost: new FormControl('', [Validators.required])
  })

}
