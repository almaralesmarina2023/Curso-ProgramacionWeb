import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { ServiceSHService } from '../../service/service-sh.service';
import { SuperHeroe } from '../../modules/superheroe.model';
import { Router } from '@angular/router';
import { MayusculasDomDirective } from '../../directivas/mayusculas-dom.directive';




@Component({
  selector: 'app-add-super-heroe',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MayusculasDomDirective],
  templateUrl: './add-super-heroe.component.html',
  styleUrl: './add-super-heroe.component.css'
})
export class AddSuperHeroeComponent implements OnInit{

  alert:number=0;
  archivo:any[]=[];
  imgBase64:any="";
  formAdd=new FormGroup({
    'nombre':new FormControl('',Validators.required),
    'editorial':new FormControl('',Validators.required),
    'alter_ego':new FormControl(''),
    'primera_aparicion':new FormControl(''),
    'characters':new FormControl(''),
    'estadodelsuperheroe':new FormControl(0,Validators.required),
    'img':new FormControl('')
  })

  constructor(private accesoBD:ServiceSHService,private router:Router){
    //alert("construcor add")
  }
  
  ngOnInit(): void {
    this.img.setValue("./assets/desconocido.jpg");
    //alert("on Init add")
  }

  get nombre():FormControl{
    return this.formAdd.get('nombre') as FormControl; 
  }

  get editorial():FormControl{
    return this.formAdd.get('editorial') as FormControl; 
  }

  get alter_ego():FormControl{
    return this.formAdd.get('alter_ego') as FormControl; 
  }

  get primera_aparicion():FormControl{
    return this.formAdd.get('primera_aparicion') as FormControl; 
  }

  get characters():FormControl{
    return this.formAdd.get('characters') as FormControl; 
  }

  get img():FormControl{
    return this.formAdd.get('img') as FormControl; 
  }
  

  get estadodelsuperheroe():FormControl{
    return this.formAdd.get('estadodelsuperheroe') as FormControl; 
  }


capturarfile(event:any):void{
  const archivo =event.target.files[0];
  const reader= new FileReader();
  reader.onloadend=()=>{
    const base64String=reader.result as string;
    this.imgBase64=base64String;
    this.img.setValue(this.imgBase64);
    //console.log(base64String); 
  };
if(archivo)
reader.readAsDataURL(archivo);
}

GuardarSuperHeroe():void{
  //alert(this.img)
  //this.alert=3;
  let sp:SuperHeroe= new SuperHeroe(0,this.nombre.value,this.editorial.value,this.alter_ego.value,this.primera_aparicion.value,this.characters.value,
    this.estadodelsuperheroe.value,this.imgBase64);
    this.accesoBD.postDatos(sp);
    this.alert=1;
    this.formAdd.reset();
    this.img.setValue("./assets/desconocido.jpg");

}

VolverListado():void{
  this.router.navigate(['/listadosuperheroes']);
}

}
