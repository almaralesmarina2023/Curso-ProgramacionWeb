import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CHeroe } from '../modelos/CHeroe';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient){}

  peticionHeroes:CHeroe[]=[];
  rFiltro:CHeroe[]=[];
  //resultadoPeticion :CHeroe= new CHeroe(0, "", "", new Date(), "", "", [""], [""], [""], "");
  resultadoPeticion!:CHeroe;

   getHeroes():Observable<CHeroe[]>{
    let obs$ = new Observable<CHeroe[]>;
    obs$ = this.http.get<CHeroe[]>(`http://localhost:3000/heroes`);
    return obs$;
  }

  putHeroe(id: number, datos: CHeroe):void{
    //modificar
    this.http.put<CHeroe>(`http://localhost:3000/heroes/${id}`, {
      "nombre": datos.nombre,
      "nombre_nacimiento": datos.nombre_nacimiento,
      "p_aparicion": datos.p_aparicion,
      "creador": datos.creador,
      "sexo": datos.sexo,
      "especialidad": datos.especialidad,
      "aliados": datos.aliados,
      "enemigos":datos.enemigos,
      "imagen": datos.imagen
    }).subscribe(nuevo=>{this.resultadoPeticion=nuevo;});
  }

  postHeroe(datos: CHeroe):void{
    //agregar
    this.http.post<CHeroe>(`http://localhost:3000/heroes`, 
    {
      "nombre": datos.nombre,
      "nombre_nacimiento": datos.nombre_nacimiento,
      "p_aparicion": datos.p_aparicion,
      "creador": datos.creador,
      "sexo": datos.sexo,
      "especialidad": datos.especialidad,
      "aliados": datos.aliados,
      "enemigos":datos.enemigos,
      "imagen": datos.imagen
    })
    .subscribe(nuevo=>{this.resultadoPeticion=nuevo;});
  }

  deleteHeore(id: number):void{
    //eliminar
    this.http.delete<CHeroe>(`http://localhost:3000/heroes/${id}`).subscribe(nuevo=>{this.resultadoPeticion=nuevo;});

  }

  dameHeroes():CHeroe[]{
    this.getHeroes();
    return this.peticionHeroes;
  }

  dameHeroexId(id:number): Observable<CHeroe>{
    let obs$ = new Observable<CHeroe>;
    obs$ = this.http.get<CHeroe>(`http://localhost:3000/heroes/${id}`);
    //alert("servicio con obs" + obs$);
    return obs$;
  }

}
