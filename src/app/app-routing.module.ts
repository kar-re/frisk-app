import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ListaComponent } from './lista/lista.component'; 
import { OmOssComponent } from './om-oss/om-oss.component';
import { AktivitetComponent } from './aktivitet/aktivitet.component';
import { FormComponent } from './form/form.component';
import { GeneratorComponent } from './generator/generator.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "om-oss", component: OmOssComponent},
  {path: "aktiviteter", component: ListaComponent},
  {path: "aktiviteter/:id", component: AktivitetComponent},
  {path: "lista", component: ListaComponent},
  {path: "form", component: FormComponent},
  {path: "generator", component: GeneratorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
