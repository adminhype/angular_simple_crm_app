import { Component } from '@angular/core';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import { MATERIAL_IMPORTS } from '../shared/materials';
import { MatDialog } from '@angular/material/dialog';
import { UserClass } from '../models/user.class';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-user',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  allUsers: any[] = [];
  user = new UserClass();
  constructor(private firebaseService: FirebaseService, public dialog: MatDialog) {
      this.firebaseService.getUsers().subscribe((changes) => {
      this.allUsers = changes;
      console.log("Users from Firestore", changes);
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUser);
  }
}
