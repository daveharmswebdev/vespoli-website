import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: 'https://localhost:5001/api';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(UserName, Password) {
    const url = 'https://localhost:5001/api/auth/login';
    const body = {
      UserName,
      Password
    };

    console.log(url);

    return this.http.post(url, body).pipe(
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
    const headers = new HttpHeaders().set(
      'Authorization',
      // tslint:disable-next-line:max-line-length
      'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyIiwidW5pcXVlX25hbWUiOiJtYXRoaXMiLCJuYmYiOjE1NDQ5MDg0MTksImV4cCI6MTU0NDk5NDgxOSwiaWF0IjoxNTQ0OTA4NDE5fQ.HBxGAmZVheC0fTuYF0nYsJ75oG47SMcPOtO1TUOOk-YVWzEEwI9klSmLQRCjoAM0LtVS9zRxIAqBXQ2sBa5fgA'
    );

    return this.http.get('https://localhost:5001/api/rower', { headers });
  }
}
