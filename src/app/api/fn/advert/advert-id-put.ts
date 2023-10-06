/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShortAdvertDto } from '../../models/short-advert-dto';

export interface AdvertIdPut$Params {

/**
 * Идентификатор обновляемого объявления
 */
  id: string;
      body?: {

/**
 * Название.
 */
'Name': string;

/**
 * Описание.
 */
'Description'?: string;

/**
 * Изображения объявлений
 */
'Images'?: Array<Blob>;

/**
 * Цена.
 */
'Cost': number;

/**
 * Email.
 */
'Email'?: string;

/**
 * Телефон.
 */
'Phone': string;

/**
 * Геолокация объявления
 */
'Location': string;

/**
 * Id категории.
 */
'CategoryId': string;
}
}

export function advertIdPut(http: HttpClient, rootUrl: string, params: AdvertIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortAdvertDto>> {
  const rb = new RequestBuilder(rootUrl, advertIdPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ShortAdvertDto>;
    })
  );
}

advertIdPut.PATH = '/Advert/{id}';
