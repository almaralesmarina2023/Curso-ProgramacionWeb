import { Component, Inject, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CHeroe } from '../../modelos/CHeroe';
import { SharedService } from '../../servicios/shared.service';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  @Input() heroe : CHeroe = new CHeroe (0, "", "", new Date(), "", "", [""], [""], [""], "");
  @Input() indice: number = 0;
  @Output() eliminar: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(public dialog: SharedService){
  }

  Eliminar():void{
    this.dialog.openD().subscribe(res =>{
      if(res){
        this.eliminar.emit(this.indice);
        console.log('eliminado');
      }
    });
  }

}
