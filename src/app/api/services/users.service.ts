/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ErrorDto } from '../models/error-dto';
import { ShortUserDto } from '../models/short-user-dto';
import { UserDto } from '../models/user-dto';
import { usersCurrentGet } from '../fn/users/users-current-get';
import { UsersCurrentGet$Params } from '../fn/users/users-current-get';
import { usersGet } from '../fn/users/users-get';
import { UsersGet$Params } from '../fn/users/users-get';
import { usersIdDelete } from '../fn/users/users-id-delete';
import { UsersIdDelete$Params } from '../fn/users/users-id-delete';
import { usersIdGet } from '../fn/users/users-id-get';
import { UsersIdGet$Params } from '../fn/users/users-id-get';
import { usersIdPut } from '../fn/users/users-id-put';
import { UsersIdPut$Params } from '../fn/users/users-id-put';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `usersGet()` */
  static readonly UsersGetPath = '/Users';

  /**
   * Вернуть всех пользователей.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGet$Response(params?: UsersGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ShortUserDto>>> {
    return usersGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Вернуть всех пользователей.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGet(params?: UsersGet$Params, context?: HttpContext): Observable<Array<ShortUserDto>> {
    return this.usersGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ShortUserDto>>): Array<ShortUserDto> => r.body)
    );
  }

  /** Path part for operation `usersIdGet()` */
  static readonly UsersIdGetPath = '/Users/{id}';

  /**
   * Получить пользователя по id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdGet$Response(params: UsersIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return usersIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Получить пользователя по id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdGet(params: UsersIdGet$Params, context?: HttpContext): Observable<UserDto> {
    return this.usersIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /** Path part for operation `usersIdPut()` */
  static readonly UsersIdPutPath = '/Users/{id}';

  /**
   * Обновляет пользователя по модели.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersIdPut()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  usersIdPut$Response(params: UsersIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortUserDto>> {
    return usersIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * Обновляет пользователя по модели.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersIdPut$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  usersIdPut(params: UsersIdPut$Params, context?: HttpContext): Observable<ShortUserDto> {
    return this.usersIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<ShortUserDto>): ShortUserDto => r.body)
    );
  }

  /** Path part for operation `usersIdDelete()` */
  static readonly UsersIdDeletePath = '/Users/{id}';

  /**
   * Удаляет пользователя по ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdDelete$Response(params: UsersIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return usersIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Удаляет пользователя по ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdDelete(params: UsersIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.usersIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `usersCurrentGet()` */
  static readonly UsersCurrentGetPath = '/Users/current';

  /**
   * Получить текущего пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersCurrentGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersCurrentGet$Response(params?: UsersCurrentGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ErrorDto>> {
    return usersCurrentGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Получить текущего пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersCurrentGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersCurrentGet(params?: UsersCurrentGet$Params, context?: HttpContext): Observable<ErrorDto> {
    return this.usersCurrentGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ErrorDto>): ErrorDto => r.body)
    );
  }

}
