/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShortCategoryDto } from '../../models/short-category-dto';

export interface CategoriesPost$Params {
      body?: {

/**
 * Название
 */
'Name': string;

/**
 * Id категории выше по иерархии (если есть)
 */
'ParentId'?: string;
}
}

export function categoriesPost(http: HttpClient, rootUrl: string, params?: CategoriesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortCategoryDto>> {
  const rb = new RequestBuilder(rootUrl, categoriesPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ShortCategoryDto>;
    })
  );
}

categoriesPost.PATH = '/Categories';
