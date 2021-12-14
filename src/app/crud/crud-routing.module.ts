import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        component: CrudComponent,
        children: [
            {
                path: '',
                component: LoginComponent,
            },
            {
              path: 'register',
              component: RegisterComponent
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            }
        ],
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
