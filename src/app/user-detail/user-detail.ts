import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../shared/materials';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { UserClass } from '../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddress } from '../dialog-edit-address/dialog-edit-address';
import { DialogEditUser } from '../dialog-edit-user/dialog-edit-user';

@Component({
  selector: 'app-user-detail',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  userID = '';
  user: UserClass = new UserClass();

  constructor(
    private route: ActivatedRoute, 
    private firebaseService: FirebaseService,
    public dialog: MatDialog) {
    this.onInit();

  }

  onInit() {
    this.route.paramMap.subscribe(paramMap => {
    this.userID = paramMap.get('id') || '';
    console.log('yey, id:', this.userID);
    });
    
    this.firebaseService.getUsers().subscribe((changes) => {
      const user = changes.find(u => u.id === this.userID);
      this.user = new UserClass(user);
      console.log("User details from Firestore", this.user instanceof UserClass);
    });
}

  editUserDetails() {
    const dialogRef = this.dialog.open(DialogEditUser);
    dialogRef.componentInstance.user = new UserClass(this.user.toJson());
    dialogRef.componentInstance.userID = this.userID;
  }
  editMenu() {
    const dialogRef = this.dialog.open(DialogEditAddress);
    dialogRef.componentInstance.user = new UserClass(this.user.toJson());
    dialogRef.componentInstance.userID = this.userID;
  }
}
