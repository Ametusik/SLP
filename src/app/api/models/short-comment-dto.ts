/* tslint:disable */
/* eslint-disable */
import { ShortUserDto } from '../models/short-user-dto';

/**
 * Сокращенная информация о комментарии
 */
export interface ShortCommentDto {

  /**
   * Дата создания
   */
  created?: string;

  /**
   * Идентификатор
   */
  id?: null | string;

  /**
   * Идентификатор родительского комментария
   */
  parentId?: null | string;

  /**
   * Содержимое комментария
   */
  text?: null | string;
  user?: ShortUserDto;
}
