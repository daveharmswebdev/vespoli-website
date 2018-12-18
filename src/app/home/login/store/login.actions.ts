import { Action } from '@ngrx/store';
import { ILoginCredential } from './login.models';

export enum LoginActionTypes {
  LoginAttempt = '[Login Component] Login',
  LoginSuccess = '[Login Effects] Login Success',
  LoginFailure = '[Login Effects] Login Failure'
}

export class LoginAttempt implements Action {
  readonly type = LoginActionTypes.LoginAttempt;

  constructor(public payload: ILoginCredential) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LoginSuccess;

  constructor(public payload: { token: string, nameid: string, unique_name: string }) {}
}
export class LoginFailure implements Action {
  readonly type = LoginActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export type LoginActions = LoginAttempt
  | LoginSuccess
  | LoginFailure;
