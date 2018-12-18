import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DialogComponentComponent)
  }

}
