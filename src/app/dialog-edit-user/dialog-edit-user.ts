import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../shared/materials';
import { FormsModule } from '@angular/forms';
import { UserClass } from '../models/user.class';
import {MatDialogRef} from '@angular/material/dialog';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-dialog-edit-user',
  imports: [MATERIAL_IMPORTS, FormsModule],
  templateUrl: './dialog-edit-user.html',
  styleUrl: './dialog-edit-user.scss',
})
export class DialogEditUser {
  user!: UserClass;
  isLoading = false;
  userID!: string;
  constructor(private firebaseService: FirebaseService, public dialogRef: MatDialogRef<DialogEditUser>) {
  }

  saveUser() {
    this.isLoading = true;
    this.firebaseService.updateUser(this.userID, this.user.toJson()).then(() => {
      console.log('User updated successfully');
      this.isLoading = false;
      this.dialogRef.close();
    });
  } 
}
