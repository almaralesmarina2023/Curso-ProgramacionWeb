import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router} from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { CHeroe } from '../../modelos/CHeroe';
import { HeroeComponent } from '../heroe/heroe.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalles-heroe',
  standalone: true,
  imports: [CommonModule, HeroeComponent, FormsModule],
  templateUrl: './detalles-heroe.component.html',
  styleUrl: './detalles-heroe.component.css'
})
export class DetallesHeroeComponent{

  indice : number = 0;
  cuadroNombre : string ="";
  cuadroNombreNacimiento : string ="";
  cuadroPrimeraAparicion : Date= new Date();
  cuadroCreador : string ="";
  cuadroSexo : string ="";
  cuadroHabilidades :  string[] = [""];
  cuadroAliados : string[] = [""];;
  cuadroEnemigos : string[] = [""];
  cuadroImagen: string ="";

  hero:CHeroe= new CHeroe(0, "", "", new Date(), "", "", [""], [""], [""], "");
  

  constructor(private rout: Router, private route: ActivatedRoute, private heroservice : HeroesService){
    this.indice=this.route.snapshot.params['id'];
    this.heroservice.dameHeroexId(this.indice).subscribe(
      nuevo=>{this.hero=nuevo;
      this.cuadroNombre=this.hero.nombre;
      this.cuadroNombreNacimiento=this.hero.nombre_nacimiento;
      this.cuadroPrimeraAparicion=this.hero.p_aparicion;
      this.cuadroCreador=this.hero.creador;
      this.cuadroSexo=this.hero.sexo;
      this.cuadroHabilidades=this.hero.especialidad;
      this.cuadroAliados=this.hero.aliados;
      this.cuadroEnemigos=this.hero.enemigos;
      this.cuadroImagen=this.hero.imagen;}
     );
  }

  volverListar():void{
    this.rout.navigate(['heroes']);
  }

  Editar():void{
    this.rout.navigate(['editar', this.indice]);
  }
}
