import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  // {
  //   path: '',
  //   loadChildren: () => import('../theme/theme.module').then(m => m.ThemeModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
