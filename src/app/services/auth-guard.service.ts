import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { selectToken } from '../home/login/store/login.selectors';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.store.pipe(
        select(selectToken),
        map(token => !!token),
        tap(val => {
          if (!val) {
            this.router.navigate(['/']);
          }
        }),
      );
  }
}
