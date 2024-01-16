import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperHeroe } from '../../modules/superheroe.model';
import { ServiceSHService } from '../../service/service-sh.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-modificar-super-heroe',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './modificar-super-heroe.component.html',
  styleUrl: './modificar-super-heroe.component.css'
})
export class ModificarSuperHeroeComponent  implements OnInit {
  
  idElemento:number=0;

  //alert:number=0;
  archivo:any[]=[];
  imgBase64:any="";
  sh:SuperHeroe=new SuperHeroe(0,"","","","","",1,"");
 

  formMod=new FormGroup({
    'nombre':new FormControl('',Validators.required),
    'editorial':new FormControl('',Validators.required),
    'alter_ego':new FormControl(''),
    'primera_aparicion':new FormControl(''),
    'characters':new FormControl(''),
    'estadodelsuperheroe':new FormControl('',Validators.required),
    'img':new FormControl('')
  })
  constructor(private accesoBD:ServiceSHService,private route:ActivatedRoute,private router:Router){} 
 
  ngOnInit(): void {
    let superHeroe$:Observable<SuperHeroe>;
    this.idElemento=this.route.snapshot.params['id'];
    
    superHeroe$=this.accesoBD.getDetallesSH_fromJson(this.idElemento)
    superHeroe$.subscribe(data=>{
        this.sh=data;
        this.nombre.setValue(this.sh.nombre)
    })
  }

  get nombre():FormControl{
    return this.formMod.get('nombre') as FormControl; 
  }

  get editorial():FormControl{
    return this.formMod.get('editorial') as FormControl; 
  }


  get alter_ego():FormControl{
    return this.formMod.get('alter_ego') as FormControl; 
  }

  get primera_aparicion():FormControl{
    return this.formMod.get('primera_aparicion') as FormControl; 
  }

  get characters():FormControl{
    return this.formMod.get('characters') as FormControl; 
  }

  get img():FormControl{
    return this.formMod.get('img') as FormControl; 
  }
  

  get estadodelsuperheroe():FormControl{
    return this.formMod.get('estadodelsuperheroe') as FormControl; 
  }

capturarfile(event:any):void{
  const archivo =event.target.files[0];
  const reader= new FileReader();
  reader.onloadend=()=>{
    const base64String=reader.result as string;
    this.imgBase64=base64String;
    this.img.setValue(this.imgBase64);
    console.log(base64String); 
  };
if(archivo)
reader.readAsDataURL(archivo);
}

ModificarSH():void{
  
  let sh:SuperHeroe=new SuperHeroe(this.idElemento,this.nombre.value,this.editorial.value,this.alter_ego.value,this.primera_aparicion.value,this.characters.value,this.estadodelsuperheroe.value,this.img.value);
  this.accesoBD.putDatosSH(sh,this.idElemento);
  //this.router.navigate(['/listadosuperheroes']);
  this.router.navigate(['/detallles',this.idElemento]);
}

VolverListado():void{
  this.router.navigate(['/listadosuperheroes']);
}

}
