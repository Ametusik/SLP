/* tslint:disable */
/* eslint-disable */
import { ShortAdvertDto } from '../models/short-advert-dto';
import { ShortUserDto } from '../models/short-user-dto';

/**
 * Информация о комментарии
 */
export interface CommentDto {
  advert?: ShortAdvertDto;

  /**
   * Дата создания
   */
  created?: string;

  /**
   * Идентификатор
   */
  id?: null | string;

  /**
   * Родитель (если комментарий является ответом на другой комментарий)
   */
  parentId?: null | string;

  /**
   * Содержимое комментария
   */
  text?: null | string;
  user?: ShortUserDto;
}
