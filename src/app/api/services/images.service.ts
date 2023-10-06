/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { imagesIdDelete } from '../fn/images/images-id-delete';
import { ImagesIdDelete$Params } from '../fn/images/images-id-delete';
import { imagesIdGet } from '../fn/images/images-id-get';
import { ImagesIdGet$Params } from '../fn/images/images-id-get';
import { imagesPost } from '../fn/images/images-post';
import { ImagesPost$Params } from '../fn/images/images-post';
import { ShortImageDto } from '../models/short-image-dto';

@Injectable({ providedIn: 'root' })
export class ImagesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `imagesIdGet()` */
  static readonly ImagesIdGetPath = '/Images/{id}';

  /**
   * Получить изображение по id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesIdGet$Response(params: ImagesIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return imagesIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Получить изображение по id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesIdGet(params: ImagesIdGet$Params, context?: HttpContext): Observable<void> {
    return this.imagesIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `imagesIdDelete()` */
  static readonly ImagesIdDeletePath = '/Images/{id}';

  /**
   * Удаляет изображение по ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesIdDelete$Response(params: ImagesIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return imagesIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Удаляет изображение по ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesIdDelete(params: ImagesIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.imagesIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `imagesPost()` */
  static readonly ImagesPostPath = '/Images';

  /**
   * Создаёт изображение по модели.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imagesPost$Response(params?: ImagesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortImageDto>> {
    return imagesPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Создаёт изображение по модели.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imagesPost(params?: ImagesPost$Params, context?: HttpContext): Observable<ShortImageDto> {
    return this.imagesPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ShortImageDto>): ShortImageDto => r.body)
    );
  }

}
