/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShortCommentDto } from '../../models/short-comment-dto';

export interface AdvertIdCommentsGet$Params {

/**
 * Идентификатор объявления
 */
  id: string;
}

export function advertIdCommentsGet(http: HttpClient, rootUrl: string, params: AdvertIdCommentsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ShortCommentDto>>> {
  const rb = new RequestBuilder(rootUrl, advertIdCommentsGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ShortCommentDto>>;
    })
  );
}

advertIdCommentsGet.PATH = '/Advert/{id}/Comments';
