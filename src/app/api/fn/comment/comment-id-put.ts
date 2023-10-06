/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShortCommentDto } from '../../models/short-comment-dto';
import { UpdateCommentDto } from '../../models/update-comment-dto';

export interface CommentIdPut$Params {

/**
 * Идентификатор комментария
 */
  id: string;
  
    /**
     * Модель
     */
    body?: UpdateCommentDto
}

export function commentIdPut(http: HttpClient, rootUrl: string, params: CommentIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortCommentDto>> {
  const rb = new RequestBuilder(rootUrl, commentIdPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
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

commentIdPut.PATH = '/Comment/{id}';
