/* tslint:disable */
/* eslint-disable */

/**
 * Модель категории для импорта из JSON.
 */
export interface ImportCategoryDto {

  /**
   * Идентификатор категории.
   */
  id?: number;

  /**
   * Наименование категории.
   */
  name?: null | string;

  /**
   * Идентификатор родительской категории.
   */
  parentId?: null | number;
}
