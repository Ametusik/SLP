import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {CategoriesService} from "../../../api/services/categories.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  constructor(private categoryService: CategoriesService) {
  }

  ngOnInit() {


  }


}







