import { Pipe, PipeTransform } from '@angular/core';
import { CHeroe } from '../modelos/CHeroe';
import { HeroesService } from '../servicios/heroes.service';

@Pipe({
  name: 'filtrarNombre',
  standalone: true
})
export class FiltrarNombrePipe implements PipeTransform {

  heroListado: CHeroe[]=[];

  constructor(private heroservice : HeroesService){
    this.heroListado=this.heroservice.dameHeroes();
  }

  transform(Listado: CHeroe[], nombre: string): CHeroe[] {

    if (!nombre){
      return Listado;
    }
    nombre = nombre.toLocaleLowerCase();

    return Listado.filter(hero => hero.nombre.toLocaleLowerCase().includes(nombre));    
  }

}
