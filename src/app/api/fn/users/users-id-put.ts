/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShortUserDto } from '../../models/short-user-dto';

export interface UsersIdPut$Params {

/**
 * Идентификатор обновляемого пользователя
 */
  id: string;
      body?: {

/**
 * Имя пользователя
 */
'Name': string;

/**
 * Логин
 */
'Login': string;

/**
 * Пароль
 */
'Password': string;
}
}

export function usersIdPut(http: HttpClient, rootUrl: string, params: UsersIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortUserDto>> {
  const rb = new RequestBuilder(rootUrl, usersIdPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ShortUserDto>;
    })
  );
}

usersIdPut.PATH = '/Users/{id}';
