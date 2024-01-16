import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperHeroe } from '../../modules/superheroe.model';
import { ServiceSHService } from '../../service/service-sh.service';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FiltroSHPipe } from '../../pipes/filtro-sh.pipe';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxUiLoaderModule } from 'ngx-ui-loader';


@Component({
  selector: 'app-lista-super-herores',
  standalone: true,
  imports: [CommonModule,RouterLink,FiltroSHPipe,FormsModule,NgxPaginationModule,MatProgressBarModule,NgxUiLoaderModule],
  templateUrl: './lista-super-herores.component.html',
  styleUrl: './lista-super-herores.component.css'
})
export class ListaSuperHeroresComponent implements OnInit {
  
  ListadeSuperHeroes:SuperHeroe[]=[];
  filtro:string="";
  pagina!:number;
  temp:string='a43d';
  constructor(private accesoBD:ServiceSHService,private router:Router){}
  ngOnInit(): void {
    this.getListarSH();

  }

  getListarSH():void{
    this.accesoBD.getDatos().subscribe(datos=>{this.ListadeSuperHeroes=datos;});
   
  }

  DetallesSH(id:number):void{
    this.router.navigate(['/detallles',id]);
  }



}
