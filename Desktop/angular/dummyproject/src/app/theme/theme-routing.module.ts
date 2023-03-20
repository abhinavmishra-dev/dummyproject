import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:WrapperComponent,
    children:[
    {
      path: '',
      loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
    }
  ]
}, 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }