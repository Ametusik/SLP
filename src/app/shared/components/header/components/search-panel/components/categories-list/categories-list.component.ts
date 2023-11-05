import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../../../../../api/services/categories.service";
import {ShortCategoryDto} from "../../../../../../../api/models/short-category-dto";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categoriesList: ShortCategoryDto[] = [];
  selectedCategory: string = null;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    /*this.categoriesService.categoriesGet$Response().subscribe(data => {
      this.categoriesList = data.body
    })*/
  }


}
