import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LoginAttempt } from './store/login.actions';
import { selectLoggedIn, selectAttemptingLogin } from './store/login.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public attemptingLogin$: Observable<boolean>;
  public loginForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.attemptingLogin$ = this.store.pipe(select(selectAttemptingLogin));
  }

  login() {
    this.store.dispatch(
      new LoginAttempt({
        UserName: this.loginForm.get('username').value,
        Password: this.loginForm.get('password').value
      })
    );
  }

  ngOnInit() {
    this.store.pipe(select(selectLoggedIn)).subscribe(
      loggedIn => {
        if (loggedIn) {
          this.loginForm.reset();
        }
      }
    );
  }
}
