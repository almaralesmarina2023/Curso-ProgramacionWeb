import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../componentes/dialog/dialog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private dialog: MatDialog){}

  openD(): Observable<boolean>{
  return this.dialog.open(DialogComponent, {
      width: '390px',
      height: '250px',
      panelClass: 'confirm-dialog-container'
      //entradaDuracion,
      //salidaDuracion,
    }).afterClosed();
  }
}
