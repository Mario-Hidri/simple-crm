import { Component, inject } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

import { User } from '../../models/user.class';

import {
  Firestore,
  collection,
  collectionData,
  addDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    AsyncPipe,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  user = new User();
  birthDate?: Date;

  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate) => {
    const day = cellDate.getDay();
    return day === 0 ? 'sunday-date' : '';
  };

  constructor() {
    const aCollection = collection(this.firestore, 'items');
    this.items$ = collectionData(aCollection, { idField: 'id' }) as Observable<
      any[]
    >;
  }

  async saveUser() {
    if (this.birthDate) {
      this.user.birthDate = this.birthDate.getTime();
    }

    const usersCollection = collection(this.firestore, 'users');

    try {
      const result = await addDoc(usersCollection, { ...this.user });
      console.log('User added', result);
    } catch (error) {
      console.error(error);
    }
  }
}
