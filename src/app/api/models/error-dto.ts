/* tslint:disable */
/* eslint-disable */

/**
 * Модель ошибки.
 */
export interface ErrorDto {

  /**
   * Код ошибки.
   */
  errorCode?: null | string;

  /**
   * Вложенные ошибки.
   */
  internalErrors?: null | Array<ErrorDto>;

  /**
   * Сообщение для пользователя.
   */
  userMessage?: null | string;
}
