import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperHeroe } from '../../modules/superheroe.model';
import { ActivatedRoute, Route, RouterLink,Router } from '@angular/router';
import { ServiceSHService } from '../../service/service-sh.service';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-detallesde-sh',
  standalone: true,
  imports: [CommonModule,MatButtonModule,RouterLink],
  templateUrl: './detallesde-sh.component.html',
  styleUrl: './detallesde-sh.component.css'
})
export class DetallesdeSHComponent implements OnInit {

  superHeroe!:SuperHeroe;
  idElemento:number=0;
  
  constructor(private route:ActivatedRoute,private accesoBD:ServiceSHService,private router:Router){
    this.idElemento=this.route.snapshot.params['id'];
    this.superHeroe=this.accesoBD.getDetallesSH_inArray(this.idElemento)
  }
  ngOnInit(): void {
    // this.idElemento=this.route.snapshot.params['id'];
    // this.superHeroe=this.accesoBD.getDetallesSH_inArray(this.idElemento);
  }



  EliminarSH(id:number){
    this.accesoBD.deleteSH(this.idElemento);
    this.router.navigate(['/listadosuperheroes']);
  }

  ModificarSH(id:number){
    
    this.router.navigate(['/nuevomodificar',id]);
  }
  
}

