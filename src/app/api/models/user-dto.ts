/* tslint:disable */
/* eslint-disable */
import { ShortAdvertDto } from '../models/short-advert-dto';

/**
 * Полная информация о пользователе
 */
export interface UserDto {

  /**
   * Объявления
   */
  adverts?: null | Array<ShortAdvertDto>;

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Имя пользователя
   */
  name?: null | string;

  /**
   * Дата регистрации
   */
  registeredTime?: string;

  /**
   * Роль
   */
  role?: null | string;
}
