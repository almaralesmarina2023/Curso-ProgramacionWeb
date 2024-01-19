export class CHeroe{
   id : number;
    nombre: string;
    nombre_nacimiento: string
    p_aparicion: Date;
    creador: string;
    sexo : string;
    especialidad : string[];
    aliados : string[];
    enemigos : string[];
    imagen : string;

    constructor(id: number= 0, nombre: string="", nombre_nacimiento:string="", p_aparicion:Date=new Date(0, 0, 0), creador:string="", sexo: string = "", especialidad: string[]=[], aliados: string[]=[], enemigos:string[]=[], imagen:string=""){
       this.id= id;
        this.nombre=nombre;
        this.nombre_nacimiento=nombre_nacimiento;
        this.p_aparicion=p_aparicion;
        this.creador= creador;
        this.sexo=sexo;
        this.especialidad=especialidad;
        this.aliados=aliados;
        this.enemigos=enemigos;
        this.imagen=imagen;
    }

}