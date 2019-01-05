import { Component, OnInit } from '@angular/core';
import { LoginService } from '../home/login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rowers',
  templateUrl: './rowers.component.html',
  styleUrls: ['./rowers.component.scss']
})
export class RowersComponent implements OnInit {
  public rowers$: Observable<any>;

  constructor(private service: LoginService) { }

  ngOnInit() {
    this.rowers$ = this.service.getRowers();
  }

}
