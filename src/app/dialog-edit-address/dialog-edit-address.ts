import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../shared/materials';
import { FormsModule } from '@angular/forms';
import { UserClass } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-edit-address',
  imports: [MATERIAL_IMPORTS, FormsModule],
  templateUrl: './dialog-edit-address.html',
  styleUrl: './dialog-edit-address.scss',
})
export class DialogEditAddress {
  user!: UserClass;
  isLoading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddress>) {
  }

  saveAddress() {
    this.isLoading = true;
    console.log('Address updated:', this.user);
    this.isLoading = false;
    this.dialogRef.close();
  }
}
