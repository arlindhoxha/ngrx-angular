import { Action } from "@ngrx/store";

export const APP_INIT = 'APP_INIT';

export class AppInitAction implements Action {
  readonly type = APP_INIT;

  constructor() {}
}
