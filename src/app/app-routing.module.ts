import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcercaDeComponent } from './componentes/acerca-de/editar-acerca-de.component';
import { EditarHabilidadComponent } from './componentes/aptitudes/editar-habilidad.component';
import { NuevaHabilidadComponent } from './componentes/aptitudes/nueva-habilidad.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NuevaExperienciaComponent},
  {path: 'editexp/:id', component:EditarExperienciaComponent},
  {path: 'nuevaedu', component: NuevaEducacionComponent},
  {path: 'editedu/:id', component:EditarEducacionComponent},
  {path: 'editaracercade/:id', component:EditarAcercaDeComponent},
  {path: 'edithab/:id', component:EditarHabilidadComponent},
  {path: 'nuevahab', component:NuevaHabilidadComponent},
  {path: 'editpro/:id', component:EditarProyectoComponent},
  {path: 'nuevopro', component:NuevoProyectoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
