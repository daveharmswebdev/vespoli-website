import { Injectable } from '@angular/core';
import { Effect, ofType } from '@ngrx/effects';
import { LoginService } from '../login.service';
import { Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { LoginAttempt, LoginActionTypes, LoginSuccess, LoginFailure } from './login.actions';
import { switchMap, map, tap, catchError } from 'rxjs/operators';

@Injectable()
export class LoginEffects {

  @Effect()
  loginAttempt$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoginAttempt>(LoginActionTypes.LoginAttempt),
      switchMap(action => {
        return this.loginService.login(action.payload.UserName, action.payload.Password)
          .pipe(
            map(token => new LoginSuccess(token)),
            catchError(error => of(new LoginFailure(error)))
          );
      })
    );

  constructor(private loginService: LoginService, private actions$: Actions) {}
}
