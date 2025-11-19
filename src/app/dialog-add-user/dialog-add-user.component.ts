import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

}
