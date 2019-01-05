import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { ILoginState, getUniqueName, getLoggedIn, getAttemptingLogin, getToken } from './login.reducer';

export const selectLoginState = createFeatureSelector<AppState, ILoginState>('loginState');

export const selectUniqueName = createSelector(
  selectLoginState,
  getUniqueName
);

export const selectLoggedIn = createSelector(
  selectLoginState,
  getLoggedIn
);

export const selectAttemptingLogin = createSelector(
  selectLoginState,
  getAttemptingLogin
);

export const selectToken = createSelector(
  selectLoginState,
  getToken
);

