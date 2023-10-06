import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


import {Category} from "../../shared/entities/category";
import {CategoriesService} from "../../api/services/categories.service";

@Component({
  selector: 'app-create-adv',
  templateUrl: './create-adv.component.html',
  styleUrls: ['./create-adv.component.scss']
})
export class CreateAdvComponent implements OnInit {

  categoryList: Category[] = [];

  createAdvForm: FormGroup = new FormGroup({
    category: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    location: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    img: new FormControl(''),
    cost: new FormControl('', [Validators.required])
  })

  constructor(private categoryService: CategoriesService) {
  }

  ngOnInit() {
    this.categoryService.getCategoriesList().subscribe((data: Category[]) => (this.categoryList = data))
  }


}
