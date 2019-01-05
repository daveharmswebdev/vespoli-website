import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, map, delay, switchMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectToken } from './store/login.selectors';
import { AppState } from 'src/app/reducers';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: 'https://localhost:5001/api';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  login(UserName, Password) {
    const url = 'https://localhost:5001/api/auth/login';
    const body = {
      UserName,
      Password
    };

    console.log(url);

    return this.http.post(url, body).pipe(
      delay(0),
      map((resp: { token: string }) => {
        const { nameid, unique_name } = this.jwtHelper.decodeToken(resp.token);

        return {
          token: resp.token,
          nameid,
          unique_name
        };
      })
    );
  }

  getRowers() {
    return this.store.pipe(
      select(selectToken),
      switchMap(token => {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get('https://localhost:5001/api/rower', { headers });
      })
    );
  }
}
