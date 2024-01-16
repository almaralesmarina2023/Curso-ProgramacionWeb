export class SuperHeroe{

    id:number;  
    nombre:string; 
    editorial:string;
    alter_ego:string;
    primera_aparicion:string;
    characters:string;
    estadodelsuperheroe:number;
    img:string;

    
    constructor(id:number,nombre:string,editorial:string,alter_ego:string,primera_aparicion:string,
        characters:string,estadodelsuperheroe:number,img:string){
            this.id=id;
            this.nombre=nombre;
            this.editorial=editorial;
            this.alter_ego=alter_ego;
            this.primera_aparicion=primera_aparicion;
            this.characters=characters;
            this.estadodelsuperheroe=estadodelsuperheroe;
            this.img=img;
        }
}