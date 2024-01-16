import { Routes } from '@angular/router';
import { LauncherComponent } from './components/launcher/launcher.component';
import { ListaSuperHeroresComponent } from './components/lista-super-herores/lista-super-herores.component';
import { AddSuperHeroeComponent } from './components/add-super-heroe/add-super-heroe.component';
import { ModificarSuperHeroeComponent } from './components/modificar-super-heroe/modificar-super-heroe.component';
import { DetallesdeSHComponent } from './components/detallesde-sh/detallesde-sh.component';
import { NuevomodificarComponent } from './nuevomodificar/nuevomodificar.component';
;

export const routes: Routes = [
    {path:'',component:LauncherComponent},
    {path: 'listadosuperheroes',component:ListaSuperHeroresComponent},
    {path: 'adicionarSH', component:AddSuperHeroeComponent},
    {path:'detallles/:id', component:DetallesdeSHComponent},
    {path:'modificar/:id', component:ModificarSuperHeroeComponent},
    {path:'nuevomodificar/:id', component:NuevomodificarComponent}
];
