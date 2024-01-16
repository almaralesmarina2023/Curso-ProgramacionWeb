import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuperHeroe } from '../modules/superheroe.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceSHService {

  BD_SuperHerores:SuperHeroe[]=[];
  jsonRoute:string="http://localhost:3000/SuperHeroes/"
  constructor(private http:HttpClient) { }

  
  getDatos():Observable<SuperHeroe[]>{
    let datos$=this.http.get<SuperHeroe[]>("http://localhost:3000/SuperHeroes");
    datos$.subscribe(dato=>{this.BD_SuperHerores=dato;})
    return datos$;
    //return this.http.get<SuperHeroe[]>("http://localhost:3000/SuperHeroes");
  }

  postDatos(sh:SuperHeroe){
    this.http.post<SuperHeroe>(this.jsonRoute,{
      "nombre":sh.nombre,
      "editorial":sh.editorial, 
      "alter_ego":sh.alter_ego,
      "primera_aparicion":sh.primera_aparicion,
      "characters":sh.characters,
      "estadodelsuperheroe":sh.estadodelsuperheroe,
      "img":sh.img
      
    }).subscribe(datos=>{sh=datos});
  }

  deleteSH(idBD:number):void{
    let camino:string=this.jsonRoute+idBD;
    let result!:SuperHeroe;
    this.http.delete<SuperHeroe>(camino).subscribe(datos=>{result=datos;});
  }

  putDatosSH(sh:SuperHeroe,id:number){
    let camino:string=this.jsonRoute+id;
    this.http.put<SuperHeroe>(camino,{
      "nombre":sh.nombre,
      "editorial":sh.editorial, 
      "alter_ego":sh.alter_ego,
      "primera_aparicion":sh.primera_aparicion,
      "characters":sh.characters,
      "estadodelsuperheroe":sh.estadodelsuperheroe,
      "img":sh.img
    }).subscribe(datos=>{sh=datos;})
   
    for(let i=0; i<this.BD_SuperHerores.length;i++)
    {
    if(this.BD_SuperHerores[i].id==sh.id)
       {
        this.BD_SuperHerores[i]=sh;
        break;
       }
    }

  }

  getDetallesSH_inArray(id:number):SuperHeroe{
   let sh!:SuperHeroe;
   for(let i of this.BD_SuperHerores){
      if(i.id==id)
        return sh=i;
      }
   return sh;
  }

  getDetallesSH_fromJson(id:number):Observable<SuperHeroe>{
    let camino=this.jsonRoute+id;
    let obs$=this.http.get<SuperHeroe>(camino);
    return obs$;
  
}
 
   


}
