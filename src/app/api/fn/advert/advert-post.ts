/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShortAdvertDto } from '../../models/short-advert-dto';

export interface AdvertPost$Params {
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

export function advertPost(http: HttpClient, rootUrl: string, params?: AdvertPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortAdvertDto>> {
  const rb = new RequestBuilder(rootUrl, advertPost.PATH, 'post');
  if (params) {
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

advertPost.PATH = '/Advert';
