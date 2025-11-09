import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../shared/materials';
import { FormsModule } from '@angular/forms';
import { UserClass } from '../models/user.class';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-user',
  imports: [MATERIAL_IMPORTS, FormsModule],
  templateUrl: './dialog-edit-user.html',
  styleUrl: './dialog-edit-user.scss',
})
export class DialogEditUser {
  user!: UserClass;
  isLoading = false;
  constructor(public dialogRef: MatDialogRef<DialogEditUser>) {
  }

  saveUser() {
    this.isLoading = true;
    console.log('User updated:', this.user);
    this.isLoading = false;
    this.dialogRef.close();
  }
}
