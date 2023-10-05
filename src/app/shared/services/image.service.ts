import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Image} from "../entities/image";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {
  }

  getImage(id: string): Observable<Object> {
    return this.http.get('http://194.87.237.48:5000/Images/' + id);

  }
}
