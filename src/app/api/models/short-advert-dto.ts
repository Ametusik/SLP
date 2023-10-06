/* tslint:disable */
/* eslint-disable */

/**
 * Краткая информация об объявлении
 */
export interface ShortAdvertDto {

  /**
   * Цена
   */
  cost?: number;

  /**
   * Дата создания.
   */
  createdAt?: string;

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Изображения
   */
  imagesIds?: null | Array<string>;

  /**
   * Признак актуальности объявления.
   */
  isActive?: boolean;

  /**
   * Геолокация объявления
   */
  location?: null | string;

  /**
   * Название
   */
  name?: null | string;
}
