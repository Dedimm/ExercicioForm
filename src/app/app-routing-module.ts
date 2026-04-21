import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Perfil } from './perfil/perfil';
import { Login } from './login/login';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'perfil/:email', component: Perfil },
  { path: '', redirectTo: 'login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
