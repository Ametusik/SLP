import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Advert} from "../entities/advert";


@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor(private http: HttpClient) {
  }

  public getAdvertList(a: string | null): Observable<Advert[]> {
    let obj = {search: a, showNonActive: true}
    return this.http.post('http://194.87.237.48:5000/Advert/search', obj).pipe(map((data: any) => {
      return data.map(function (advert: Advert): Advert {
        return advert;
      })
    }))
  }

  /*public createAdvert(advert:Advert):Observable<Advert>{
    let obj = {advert.categoryId}
  }*/

}
