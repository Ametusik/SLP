/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authLoginPost } from '../fn/authorization/auth-login-post';
import { AuthLoginPost$Params } from '../fn/authorization/auth-login-post';
import { authRegisterPost } from '../fn/authorization/auth-register-post';
import { AuthRegisterPost$Params } from '../fn/authorization/auth-register-post';

@Injectable({ providedIn: 'root' })
export class AuthorizationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `authLoginPost()` */
  static readonly AuthLoginPostPath = '/Auth/Login';

  /**
   * Аутентифицирует пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLoginPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authLoginPost$Response(params?: AuthLoginPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authLoginPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Аутентифицирует пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authLoginPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authLoginPost(params?: AuthLoginPost$Params, context?: HttpContext): Observable<void> {
    return this.authLoginPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authRegisterPost()` */
  static readonly AuthRegisterPostPath = '/Auth/Register';

  /**
   * Создаёт пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authRegisterPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authRegisterPost$Response(params?: AuthRegisterPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authRegisterPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Создаёт пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authRegisterPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authRegisterPost(params?: AuthRegisterPost$Params, context?: HttpContext): Observable<void> {
    return this.authRegisterPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
