import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeroesService } from '../../servicios/heroes.service';
import { CHeroe } from '../../modelos/CHeroe';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroeComponent } from '../heroe/heroe.component';


@Component({
  selector: 'app-editar-heroe',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeroeComponent],
  providers: [HeroesService],
  templateUrl: './editar-heroe.component.html',
  styleUrl: './editar-heroe.component.css'
})
export class EditarHeroeComponent{

  indice : number = 0;
  heroe_old : CHeroe = new CHeroe (0, "", "", new Date(), "", "", [""], [""], [""], "");
  resultadoPeticion!:CHeroe;

  formUser= new FormGroup({
    'nombre': new FormControl(this.heroe_old.nombre, Validators.required),
    'nombre_real': new FormControl(this.heroe_old.nombre_nacimiento, Validators.required),
    'fecha_p': new FormControl(this.heroe_old.p_aparicion, Validators.required),
    'creador': new FormControl(this.heroe_old.creador, Validators.required),
    'sexo': new FormControl(this.heroe_old.sexo, Validators.required),
    'hab1': new FormControl(this.heroe_old.especialidad[0], Validators.required),
    'hab2': new FormControl(this.heroe_old.especialidad[1], Validators.required),
    'hab3': new FormControl(this.heroe_old.especialidad[2], Validators.required),
    'al1': new FormControl(this.heroe_old.aliados[0], Validators.required),
    'al2': new FormControl(this.heroe_old.aliados[1], Validators.required),
    'al3': new FormControl(this.heroe_old.aliados[2], Validators.required),
    'en1': new FormControl(this.heroe_old.enemigos[0], Validators.required),
    'en2': new FormControl(this.heroe_old.aliados[1], Validators.required),
    'en3': new FormControl(this.heroe_old.aliados[2], Validators.required),
    'imagen': new FormControl(this.heroe_old.imagen, Validators.required)
  });

  get nombre(): FormControl{
    return this.formUser.get('nombre') as FormControl;
  }

  get nombre_real(): FormControl{
    return this.formUser.get('nombre_real') as FormControl;
  }

  get fecha_p(): FormControl{
    return this.formUser.get('fecha_p') as FormControl;
  }

  get creador(): FormControl{
    return this.formUser.get('creador') as FormControl;
  }

  get sexo(): FormControl{
    return this.formUser.get('sexo') as FormControl;
  }

  get hab1(): FormControl{
    return this.formUser.get('hab1') as FormControl;
  }

  get hab2(): FormControl{
    return this.formUser.get('hab2') as FormControl;
  }

  get hab3(): FormControl{
    return this.formUser.get('hab3') as FormControl;
  }

  get al1(): FormControl{
    return this.formUser.get('al1') as FormControl;
  }

  get al2(): FormControl{
    return this.formUser.get('al2') as FormControl;
  }

  get al3(): FormControl{
    return this.formUser.get('al3') as FormControl;
  }

  get en1(): FormControl{
    return this.formUser.get('en1') as FormControl;
  }

  get en2(): FormControl{
    return this.formUser.get('en2') as FormControl;
  }

  get en3(): FormControl{
    return this.formUser.get('en3') as FormControl;
  }

  get imagen(): FormControl{
    return this.formUser.get('imagen') as FormControl;
  }

  constructor(private heroservice: HeroesService, private route: ActivatedRoute, private rout: Router){
    this.indice=this.route.snapshot.params['id'];
    this.heroservice.dameHeroexId(this.indice).subscribe(
      nuevo=>{this.heroe_old=nuevo;
      this.formUser.get('nombre')?.setValue(this.heroe_old.nombre);
      this.formUser.get('nombre_real')?.setValue(this.heroe_old.nombre_nacimiento);
      this.formUser.get('fecha_p')?.setValue(this.heroe_old.p_aparicion);
      this.formUser.get('creador')?.setValue(this.heroe_old.creador);
      this.formUser.get('sexo')?.setValue(this.heroe_old.sexo);
      this.formUser.get('hab1')?.setValue(this.heroe_old.especialidad[0]);
      this.formUser.get('hab2')?.setValue(this.heroe_old.especialidad[1]);
      this.formUser.get('hab3')?.setValue(this.heroe_old.especialidad[2]);
      this.formUser.get('al1')?.setValue(this.heroe_old.aliados[0]);
      this.formUser.get('al2')?.setValue(this.heroe_old.aliados[1]);
      this.formUser.get('al3')?.setValue(this.heroe_old.aliados[2]);
      this.formUser.get('en1')?.setValue(this.heroe_old.enemigos[0]);
      this.formUser.get('en2')?.setValue(this.heroe_old.enemigos[1]);
      this.formUser.get('en3')?.setValue(this.heroe_old.enemigos[2]);
      this.formUser.get('imagen')?.setValue(this.heroe_old.imagen);
      });
  }

  modificarHeroe(){
  let nomb_g = this.formUser.get('nombre')?.value;
  let nomn_g = this.formUser.get('nombre_real')?.value;
  let fech_g = this.formUser.get('fecha_p')?.value;
  let crea_g = this.formUser.get('creador')?.value;
  let sexo_g = this.formUser.get('sexo')?.value;
  let hab1_g = this.formUser.get('hab1')?.value;
  let hab2_g = this.formUser.get('hab2')?.value;
  let hab3_g = this.formUser.get('hab3')?.value;
  let ali1_g = this.formUser.get('al1')?.value;
  let ali2_g = this.formUser.get('al2')?.value;
  let ali3_g = this.formUser.get('al3')?.value;
  let ene1_g = this.formUser.get('en1')?.value;
  let ene2_g = this.formUser.get('en2')?.value;
  let ene3_g = this.formUser.get('en3')?.value;
  let img_g = this.formUser.get('imagen')?.value;
  
  let cuadroHabilidades :  any[] = [hab1_g, hab2_g, hab3_g];
  let cuadroAliados : any[]= [ali1_g, ali2_g, ali3_g];
  let cuadroEnemigos : any[]= [ene1_g, ene2_g, ene3_g];
  let fecha : any = fech_g;
  let heroe: CHeroe = new CHeroe(this.indice, nomb_g?.toString(), nomn_g?.toString(), fecha.toString(), crea_g?.toString(), sexo_g?.toString(), cuadroHabilidades, cuadroAliados, cuadroEnemigos, img_g?.toString());
  
  this.heroservice.putHeroe(heroe.id, heroe);
  console.log(heroe);

  this.rout.navigate(['heroes']);
  }

  volverListar():void{
    this.rout.navigate(['heroes']);
  }


}
