/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { categoriesGet } from '../fn/categories/categories-get';
import { CategoriesGet$Params } from '../fn/categories/categories-get';
import { categoriesIdDelete } from '../fn/categories/categories-id-delete';
import { CategoriesIdDelete$Params } from '../fn/categories/categories-id-delete';
import { categoriesIdGet } from '../fn/categories/categories-id-get';
import { CategoriesIdGet$Params } from '../fn/categories/categories-id-get';
import { categoriesIdPut } from '../fn/categories/categories-id-put';
import { CategoriesIdPut$Params } from '../fn/categories/categories-id-put';
import { categoriesImportPost } from '../fn/categories/categories-import-post';
import { CategoriesImportPost$Params } from '../fn/categories/categories-import-post';
import { categoriesPost } from '../fn/categories/categories-post';
import { CategoriesPost$Params } from '../fn/categories/categories-post';
import { CategoryDto } from '../models/category-dto';
import { ShortCategoryDto } from '../models/short-category-dto';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `categoriesGet()` */
  static readonly CategoriesGetPath = '/Categories';

  /**
   * Вернуть все категории.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesGet$Response(params?: CategoriesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ShortCategoryDto>>> {
    return categoriesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Вернуть все категории.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoriesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesGet(params?: CategoriesGet$Params, context?: HttpContext): Observable<Array<ShortCategoryDto>> {
    return this.categoriesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ShortCategoryDto>>): Array<ShortCategoryDto> => r.body)
    );
  }

  /** Path part for operation `categoriesPost()` */
  static readonly CategoriesPostPath = '/Categories';

  /**
   * Создаёт категорию по модели.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriesPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  categoriesPost$Response(params?: CategoriesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortCategoryDto>> {
    return categoriesPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Создаёт категорию по модели.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoriesPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  categoriesPost(params?: CategoriesPost$Params, context?: HttpContext): Observable<ShortCategoryDto> {
    return this.categoriesPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ShortCategoryDto>): ShortCategoryDto => r.body)
    );
  }

  /** Path part for operation `categoriesIdGet()` */
  static readonly CategoriesIdGetPath = '/Categories/{id}';

  /**
   * Получить категорию по id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesIdGet$Response(params: CategoriesIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return categoriesIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Получить категорию по id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoriesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesIdGet(params: CategoriesIdGet$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.categoriesIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `categoriesIdPut()` */
  static readonly CategoriesIdPutPath = '/Categories/{id}';

  /**
   * Обновляет категорию по модели.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriesIdPut()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  categoriesIdPut$Response(params: CategoriesIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<ShortCategoryDto>> {
    return categoriesIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * Обновляет категорию по модели.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoriesIdPut$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  categoriesIdPut(params: CategoriesIdPut$Params, context?: HttpContext): Observable<ShortCategoryDto> {
    return this.categoriesIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<ShortCategoryDto>): ShortCategoryDto => r.body)
    );
  }

  /** Path part for operation `categoriesIdDelete()` */
  static readonly CategoriesIdDeletePath = '/Categories/{id}';

  /**
   * Удаляет категорию по ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesIdDelete$Response(params: CategoriesIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return categoriesIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Удаляет категорию по ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoriesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesIdDelete(params: CategoriesIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.categoriesIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `categoriesImportPost()` */
  static readonly CategoriesImportPostPath = '/Categories/import';

  /**
   * Импортирует категории из JSON списка.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriesImportPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  categoriesImportPost$Response(params?: CategoriesImportPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return categoriesImportPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Импортирует категории из JSON списка.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoriesImportPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  categoriesImportPost(params?: CategoriesImportPost$Params, context?: HttpContext): Observable<void> {
    return this.categoriesImportPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
