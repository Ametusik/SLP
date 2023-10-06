/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AdvertDto } from '../models/advert-dto';
import { advertIdCommentsGet } from '../fn/advert/advert-id-comments-get';
import { AdvertIdCommentsGet$Params } from '../fn/advert/advert-id-comments-get';
import { advertIdCommentsPost } from '../fn/advert/advert-id-comments-post';
import { AdvertIdCommentsPost$Params } from '../fn/advert/advert-id-comments-post';
import { advertIdDelete } from '../fn/advert/advert-id-delete';
import { AdvertIdDelete$Params } from '../fn/advert/advert-id-delete';
import { advertIdGet } from '../fn/advert/advert-id-get';
import { AdvertIdGet$Params } from '../fn/advert/advert-id-get';
import { advertIdPut } from '../fn/advert/advert-id-put';
import { AdvertIdPut$Params } from '../fn/advert/advert-id-put';
import { advertPost } from '../fn/advert/advert-post';
import { AdvertPost$Params } from '../fn/advert/advert-post';
import { advertSearchPost } from '../fn/advert/advert-search-post';
import { AdvertSearchPost$Params } from '../fn/advert/advert-search-post';
import { ShortAdvertDto } from '../models/short-advert-dto';
import { ShortCommentDto } from '../models/short-comment-dto';

@Injectable({ providedIn: 'root' })
export class AdvertService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `advertSearchPost()` */
  static readonly AdvertSearchPostPath = '/Advert/search';

  /**
   * Получить список объявлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `advertSearchPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  advertSearchPost$Response(params?: AdvertSearchPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ShortAdvertDto>>> {
    return advertSearchPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Получить список объявлений.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `advertSearchPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  advertSearchPost(params?: AdvertSearchPost$Params, context?: HttpContext): Observable<Array<ShortAdvertDto>> {
    return this.advertSearchPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ShortAdvertDto>>): Array<ShortAdvertDto> => r.body)
    );
  }

  /** Path part for operation `advertIdGet()` */
  static readonly AdvertIdGetPath = '/Advert/{id}';

  /**
   * Получить объявление по id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `advertIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  advertIdGet$Response(params: AdvertIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<AdvertDto>> {
    return advertIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Получить объявление по id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `advertIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  advertIdGet(params: AdvertIdGet$Params, context?: HttpContext): Observable<AdvertDto> {
    return this.advertIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdvertDto>): AdvertDto => r.body)
    );
  }

  /** Path part for operation `advertIdPut()` */
  static readonly AdvertIdPutPath = '/Advert/{id}';

  /**
   * Обновляет объявление по модели.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `advertIdPut()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  advertIdPut$Response(params: AdvertIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortAdvertDto>> {
    return advertIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * Обновляет объявление по модели.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `advertIdPut$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  advertIdPut(params: AdvertIdPut$Params, context?: HttpContext): Observable<ShortAdvertDto> {
    return this.advertIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<ShortAdvertDto>): ShortAdvertDto => r.body)
    );
  }

  /** Path part for operation `advertIdDelete()` */
  static readonly AdvertIdDeletePath = '/Advert/{id}';

  /**
   * Удаляет объявление по ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `advertIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  advertIdDelete$Response(params: AdvertIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return advertIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Удаляет объявление по ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `advertIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  advertIdDelete(params: AdvertIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.advertIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `advertIdCommentsGet()` */
  static readonly AdvertIdCommentsGetPath = '/Advert/{id}/Comments';

  /**
   * Получить список комментариев объявления.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `advertIdCommentsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  advertIdCommentsGet$Response(params: AdvertIdCommentsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ShortCommentDto>>> {
    return advertIdCommentsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Получить список комментариев объявления.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `advertIdCommentsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  advertIdCommentsGet(params: AdvertIdCommentsGet$Params, context?: HttpContext): Observable<Array<ShortCommentDto>> {
    return this.advertIdCommentsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ShortCommentDto>>): Array<ShortCommentDto> => r.body)
    );
  }

  /** Path part for operation `advertIdCommentsPost()` */
  static readonly AdvertIdCommentsPostPath = '/Advert/{id}/comments';

  /**
   * Создаёт комментарий по модели в объявлении.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `advertIdCommentsPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  advertIdCommentsPost$Response(params: AdvertIdCommentsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortCommentDto>> {
    return advertIdCommentsPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Создаёт комментарий по модели в объявлении.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `advertIdCommentsPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  advertIdCommentsPost(params: AdvertIdCommentsPost$Params, context?: HttpContext): Observable<ShortCommentDto> {
    return this.advertIdCommentsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ShortCommentDto>): ShortCommentDto => r.body)
    );
  }

  /** Path part for operation `advertPost()` */
  static readonly AdvertPostPath = '/Advert';

  /**
   * Создаёт объявление по модели.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `advertPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  advertPost$Response(params?: AdvertPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortAdvertDto>> {
    return advertPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Создаёт объявление по модели.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `advertPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  advertPost(params?: AdvertPost$Params, context?: HttpContext): Observable<ShortAdvertDto> {
    return this.advertPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ShortAdvertDto>): ShortAdvertDto => r.body)
    );
  }

}
