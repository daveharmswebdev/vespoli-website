import { LoginActions, LoginActionTypes } from './login.actions';

export interface ILoginState {
  attemptingLogin: boolean;
  token: string;
  nameid: string;
  unique_name: string;
  loggedIn: boolean;
}

export const initialLoginState: ILoginState = {
  attemptingLogin: false,
  token: '',
  nameid: '',
  unique_name: '',
  loggedIn: false
};

export function loginReducer(
  state = initialLoginState,
  action: LoginActions
): ILoginState {
  switch (action.type) {
    case LoginActionTypes.LoginAttempt: {
      return {
        ...state,
        attemptingLogin: true
      };
    }
    case LoginActionTypes.LoginSuccess: {
      return {
        attemptingLogin: false,
        token: action.payload.token,
        nameid: action.payload.nameid,
        unique_name: action.payload.unique_name,
        loggedIn: true
      };
    }
    case LoginActionTypes.LoginFailure: {
      return {
        ...state,
        attemptingLogin: false
      };

    }
    default:
      return state;
  }
}

export const getAttemptingLogin = (state: ILoginState) => state.attemptingLogin;
export const getToken = (state: ILoginState) => state.token;
export const getUniqueName = (state: ILoginState) => state.unique_name;
export const getLoggedIn = (state: ILoginState) => state.loggedIn;
