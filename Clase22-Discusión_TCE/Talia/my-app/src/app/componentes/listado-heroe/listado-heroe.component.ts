import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroeComponent } from '../heroe/heroe.component';
import { CHeroe } from '../../modelos/CHeroe';
import { HeroesService } from '../../servicios/heroes.service';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator'; 
import { Router } from '@angular/router';
import { FiltrarNombrePipe } from '../../pipes/filtrar-nombre.pipe';

@Component({
  selector: 'app-listado-heroe',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroeComponent, MatPaginatorModule, FiltrarNombrePipe],
  templateUrl: './listado-heroe.component.html',
  styleUrl: './listado-heroe.component.css'
})
export class ListadoHeroeComponent implements OnInit{

  hero: CHeroe[]=[];
  herofiltrados: CHeroe[]=[];
  Inicio: number=0;
  Fin: number=2;
  elementosPorPagina: number=2;
  paginaActual :number=0;
  filtro: string="";

  constructor(private heroservice : HeroesService, private rout: Router){
    
  }

  ngOnInit(): void {
    this.heroservice.getHeroes().subscribe(nuevo=>{this.hero=nuevo;});
    console.log(this.hero);
  }

  cambiarPagina(e:PageEvent) {
    console.log(e);
    this.paginaActual = e.pageIndex;
    this.Inicio=e.pageIndex * e.pageSize;
    this.Fin=this.Inicio + e.pageSize;
  }

  eliminarElemento(id: number){
    this.heroservice.deleteHeore(id);
    this.heroservice.getHeroes().subscribe(nuevo=>{this.hero=nuevo;});
    location.reload();

  }
  irAgregar(){
    this.rout.navigate(["addhero"]);
  }
  
}
