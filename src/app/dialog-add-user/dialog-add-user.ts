import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../shared/materials';
import { UserClass } from '../models/user.class';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialog-add-user',
  imports: [MATERIAL_IMPORTS, FormsModule],
  templateUrl: './dialog-add-user.html',
  styleUrl: './dialog-add-user.scss',
})
export class DialogAddUser {
  user = new UserClass();
  birthDate!: Date;

  constructor() {}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('User saved:', this.user);
  }
}
