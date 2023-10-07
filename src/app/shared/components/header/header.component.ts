import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {CategoriesService} from "../../../api/services/categories.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  //categories: Category[] = []
  selectedCategory: string = ''
  search: string = ''

  constructor(private categoryService: CategoriesService) {
  }

  ngOnInit() {



  }


  searchAdvert():void {

  }


}







