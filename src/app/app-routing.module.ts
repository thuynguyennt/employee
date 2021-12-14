import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './crud/register/register.component';

const routes: Routes = [
  // {
  //   path: 'crud',
  //   loadChildren: () => import('./crud/crud.module').then(mod => mod.CrudModule),
  // },
  {
    path: 'Register',
    component: RegisterComponent
  }, 
  { path: '', redirectTo: 'Register', pathMatch: 'full' },
  { path: '**', redirectTo: 'Register' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
