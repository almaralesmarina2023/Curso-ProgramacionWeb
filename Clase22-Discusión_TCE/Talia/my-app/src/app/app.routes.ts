import { Routes } from '@angular/router';
import { ListadoHeroeComponent } from './componentes/listado-heroe/listado-heroe.component';
import { FormularioHeroeComponent } from './componentes/formulario-heroe/formulario-heroe.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { EditarHeroeComponent } from './componentes/editar-heroe/editar-heroe.component';
import { DetallesHeroeComponent } from './componentes/detalles-heroe/detalles-heroe.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'heroes', component:ListadoHeroeComponent},
    {path: 'addhero', component:FormularioHeroeComponent},
    {path: 'editar/:id', component:EditarHeroeComponent},
    {path: 'details/:id', component:DetallesHeroeComponent},
    {path: 'q', component:AboutComponent}
];
