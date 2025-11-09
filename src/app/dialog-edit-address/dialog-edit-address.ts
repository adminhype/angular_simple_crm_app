import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../shared/materials';
import { FormsModule } from '@angular/forms';
import { UserClass } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-dialog-edit-address',
  imports: [MATERIAL_IMPORTS, FormsModule],
  templateUrl: './dialog-edit-address.html',
  styleUrl: './dialog-edit-address.scss',
})
export class DialogEditAddress {
  user!: UserClass;
  isLoading = false;
  userID!: string;

  constructor(private firebaseService: FirebaseService, public dialogRef: MatDialogRef<DialogEditAddress>) {
  }

  saveAddress() {
    this.isLoading = true;
    this.firebaseService.updateUser(this.userID, this.user.toJson()).then(() => {
      console.log('Address updated successfully');
      this.isLoading = false;
      this.dialogRef.close();
    });
  }
}
