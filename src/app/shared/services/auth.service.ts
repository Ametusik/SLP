import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(login: string, password: string): Observable<Object> {
    return this.http.post("http://194.87.237.48:5000/Auth/Login", {login, password})
  }

  register(name: string, login: string, password: string): Observable<Object> {
    return this.http.post("http://194.87.237.48:5000/Auth/Register", {name, login, password})
  }


}
