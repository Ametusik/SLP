/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShortCommentDto } from '../../models/short-comment-dto';

export interface AdvertIdCommentsPost$Params {

/**
 * Идентификатор объявления
 */
  id: string;
      body?: {

/**
 * Содержимое комментария
 */
'Text': string;

/**
 * Родитель (если комментарий является ответом на другой комментарий)
 */
'ParentId'?: string;
}
}

export function advertIdCommentsPost(http: HttpClient, rootUrl: string, params: AdvertIdCommentsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortCommentDto>> {
  const rb = new RequestBuilder(rootUrl, advertIdCommentsPost.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ShortCommentDto>;
    })
  );
}

advertIdCommentsPost.PATH = '/Advert/{id}/comments';
