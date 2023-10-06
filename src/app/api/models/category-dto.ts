/* tslint:disable */
/* eslint-disable */
import { ShortCategoryDto } from '../models/short-category-dto';

/**
 * Данные о категории
 */
export interface CategoryDto {

  /**
   * Дочерние категории
   */
  childs?: null | Array<ShortCategoryDto>;

  /**
   * Id.
   */
  id?: string;

  /**
   * Название.
   */
  name?: null | string;

  /**
   * Id категории выше по иерархии.
   */
  parentId?: string;
}
