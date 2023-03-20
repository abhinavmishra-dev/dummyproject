import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { unAuthGuard } from './services/unauth.guard';

const routes: Routes = [
  {
    path: '' ,
    // canActivate:[AuthGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  // {
  //   path: '',
  //   canActivate:[AuthGuard],
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // }, 
  {
    path: '',
    canActivate:[AuthGuard] ,
    loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule)
  },  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }