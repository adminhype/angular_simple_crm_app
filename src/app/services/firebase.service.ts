import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private firestore = inject(Firestore);

  getUsers(): Observable<any[]> {
    const usersRef = collection(this.firestore, 'users');
    return collectionData(usersRef, { idField: 'id' });
  }

  addUser(user: any) {
    const usersRef = collection(this.firestore, 'users');
    return addDoc(usersRef, user);
  }
}