import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, 
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent, } from '@angular/material/dialog';
  import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogContent, MatDialogActions, MatDialogClose],
  providers: [MatDialog],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

}
