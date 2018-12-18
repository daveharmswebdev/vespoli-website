import { Action } from '@ngrx/store';

export enum ErrorActionTypes {
  DeclareError = '[Effects] Declare Error',
  ClearError = '[App Component] Clear Error'
}

export class DeclareError implements Action {
  readonly type = ErrorActionTypes.DeclareError;

  constructor(public payload: any) {}
}

export class ClearError implements Action {
  readonly type = ErrorActionTypes.ClearError;

  constructor(public payload?: any) {}
}

export type ErrorActions = DeclareError | ClearError;
