/* tslint:disable */
/* eslint-disable */

/**
 * Данные для создания нового пользователя
 */
export interface CreateUserDto {

  /**
   * Логин
   */
  login: string;

  /**
   * Имя пользователя
   */
  name: string;

  /**
   * Пароль
   */
  password: string;
}
