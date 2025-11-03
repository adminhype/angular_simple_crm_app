import { Component } from '@angular/core';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import { MATERIAL_IMPORTS } from '../shared/materials';
import { MatDialog } from '@angular/material/dialog';
import { UserClass } from '../models/user.class';

@Component({
  selector: 'app-user',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  user = new UserClass();
  constructor(public dialog: MatDialog) {}

openDialog() {
  this.dialog.open(DialogAddUser);
}
}
