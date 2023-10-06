/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShortImageDto } from '../../models/short-image-dto';

export interface ImagesPost$Params {
      body?: {

/**
 * Идентификатор объявления
 */
'AdvertId': string;

/**
 * Массив байтов, содержащий изображение
 */
'Content': Blob;
}
}

export function imagesPost(http: HttpClient, rootUrl: string, params?: ImagesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortImageDto>> {
  const rb = new RequestBuilder(rootUrl, imagesPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ShortImageDto>;
    })
  );
}

imagesPost.PATH = '/Images';
