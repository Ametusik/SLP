/* tslint:disable */
/* eslint-disable */
import { ShortCategoryDto } from '../models/short-category-dto';
import { ShortUserDto } from '../models/short-user-dto';

/**
 * Объявление (подробное описание)
 */
export interface AdvertDto {
  category?: ShortCategoryDto;

  /**
   * Цена.
   */
  cost?: number;

  /**
   * Дата создания.
   */
  created?: string;

  /**
   * Описание.
   */
  description?: null | string;

  /**
   * Email.
   */
  email?: null | string;

  /**
   * Id.
   */
  id?: string;

  /**
   * ID изображений привязанных к объявлению
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
   * Название.
   */
  name?: null | string;

  /**
   * Телефон.
   */
  phone?: null | string;
  user?: ShortUserDto;
}
