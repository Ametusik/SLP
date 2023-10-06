/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CommentDto } from '../models/comment-dto';
import { commentIdDelete } from '../fn/comment/comment-id-delete';
import { CommentIdDelete$Params } from '../fn/comment/comment-id-delete';
import { commentIdGet } from '../fn/comment/comment-id-get';
import { CommentIdGet$Params } from '../fn/comment/comment-id-get';
import { commentIdPut } from '../fn/comment/comment-id-put';
import { CommentIdPut$Params } from '../fn/comment/comment-id-put';
import { ShortCommentDto } from '../models/short-comment-dto';

@Injectable({ providedIn: 'root' })
export class CommentService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `commentIdGet()` */
  static readonly CommentIdGetPath = '/Comment/{id}';

  /**
   * Получить комментарий по id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `commentIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  commentIdGet$Response(params: CommentIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CommentDto>> {
    return commentIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Получить комментарий по id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `commentIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  commentIdGet(params: CommentIdGet$Params, context?: HttpContext): Observable<CommentDto> {
    return this.commentIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommentDto>): CommentDto => r.body)
    );
  }

  /** Path part for operation `commentIdPut()` */
  static readonly CommentIdPutPath = '/Comment/{id}';

  /**
   * Обновляет комментарий по модели.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `commentIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  commentIdPut$Response(params: CommentIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortCommentDto>> {
    return commentIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * Обновляет комментарий по модели.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `commentIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  commentIdPut(params: CommentIdPut$Params, context?: HttpContext): Observable<ShortCommentDto> {
    return this.commentIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<ShortCommentDto>): ShortCommentDto => r.body)
    );
  }

  /** Path part for operation `commentIdDelete()` */
  static readonly CommentIdDeletePath = '/Comment/{id}';

  /**
   * Удаляет комментарий по ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `commentIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  commentIdDelete$Response(params: CommentIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return commentIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Удаляет комментарий по ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `commentIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  commentIdDelete(params: CommentIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.commentIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
