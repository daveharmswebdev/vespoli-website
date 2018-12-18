import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ILoginState, loginReducer } from '../home/login/store/login.reducer';

export interface AppState {
  loginState: ILoginState;
}

export const reducers: ActionReducerMap<AppState> = {
  loginState: loginReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
