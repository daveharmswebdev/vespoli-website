import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ILoginState, loginReducer } from '../home/login/store/login.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface AppState {
  loginState: ILoginState;
}

export const reducers: ActionReducerMap<AppState> = {
  loginState: loginReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['loginState'],
    rehydrate: true
  })(reducer);
}


// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
export const metaReducers: MetaReducer<AppState>[] = [localStorageSyncReducer];
