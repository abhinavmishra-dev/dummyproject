import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewadminComponent } from './viewadmin/viewadmin.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path:'',
    component:WrapperComponent
  },
  {
    path:'viewadmin',
    component:ViewadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
