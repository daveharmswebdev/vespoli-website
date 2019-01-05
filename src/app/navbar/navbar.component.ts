import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUniqueName } from '../home/login/store/login.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public uniqueName$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.uniqueName$ = this.store.pipe(select(selectUniqueName));
  }

}
