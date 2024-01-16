import { Pipe, PipeTransform } from '@angular/core';
import { SuperHeroe } from '../modules/superheroe.model';

@Pipe({
  name: 'filtroSH',
  standalone: true
})
export class FiltroSHPipe implements PipeTransform {

  transform(superheroes:SuperHeroe[],parametro:string): SuperHeroe[] {
    let resultado:SuperHeroe[]=[];
    if(parametro=="")
    return superheroes;
    for(let i of superheroes)
    if(i.nombre.toLowerCase().indexOf(parametro)>-1)
      resultado.push(i);
    
    return resultado;
  }

}
