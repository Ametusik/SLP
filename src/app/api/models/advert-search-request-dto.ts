/* tslint:disable */
/* eslint-disable */

/**
 * Модель запроса на поиск объявлений.
 */
export interface AdvertSearchRequestDto {

  /**
   * Категория
   */
  category?: null | string;

  /**
   * Строка поиска.
   */
  search?: null | string;

  /**
   * Показывать неактивные объявления
   */
  showNonActive?: null | boolean;
}
