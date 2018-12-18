import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LoginAttempt } from './store/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public showSpinner: boolean;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  login() {
    this.store.dispatch(new LoginAttempt({ UserName: this.username, Password: this.password}));
  }
}
