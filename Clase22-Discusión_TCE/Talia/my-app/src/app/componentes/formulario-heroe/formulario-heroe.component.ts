import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeroesService } from '../../servicios/heroes.service';
import { CHeroe } from '../../modelos/CHeroe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-heroe',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [HeroesService],
  templateUrl: './formulario-heroe.component.html',
  styleUrl: './formulario-heroe.component.css'
})
export class FormularioHeroeComponent {

  formUser= new FormGroup({
    'nombre': new FormControl('', Validators.required),
    'nombre_real': new FormControl('', Validators.required),
    'fecha_p': new FormControl('', Validators.required),
    'creador': new FormControl('', Validators.required),
    'sexo': new FormControl('', Validators.required),
    'hab1': new FormControl('', Validators.required),
    'hab2': new FormControl('', Validators.required),
    'hab3': new FormControl('', Validators.required),
    'al1': new FormControl('', Validators.required),
    'al2': new FormControl('', Validators.required),
    'al3': new FormControl('', Validators.required),
    'en1': new FormControl('', Validators.required),
    'en2': new FormControl('', Validators.required),
    'en3': new FormControl('', Validators.required),
    'imagen': new FormControl('', Validators.required)
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

  constructor(private heroservice: HeroesService, private rout: Router){

  }

  adicionarHeroe(){
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
  let heroe: CHeroe = new CHeroe(0, nomb_g?.toString(), nomn_g?.toString(), fecha.toString(), crea_g?.toString(), sexo_g?.toString(), cuadroHabilidades, cuadroAliados, cuadroEnemigos, img_g?.toString());
  
  this.heroservice.postHeroe(heroe);
  console.log(heroe);

  this.rout.navigate(['heroes']);

  }

  volverListar():void{
    this.rout.navigate(['heroes']);
  }


}
