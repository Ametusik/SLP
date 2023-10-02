import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Category} from "../entities/category";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http: HttpClient) {
  }

  public getCategoriesList(): Observable<Category[]> {
    return this.http.get('http://194.87.237.48:5000/Categories').pipe(map((data: any) => {
      return data.map(function (category: Category): Category {
        return new Category(category.id, category.parentId, category.name, null)
      })
    }))
  }
}
