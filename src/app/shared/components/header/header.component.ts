import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../entities/category";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  categories: Category[] = []
  selectedCategory: string = ''
  search: string = ''

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getCategoriesList().subscribe((data: Category[]) => (this.categories = data))


  }


  searchAdvert():void {

  }


}







