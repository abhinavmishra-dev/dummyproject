import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';


@NgModule({
  declarations: [
    WrapperComponent,
    ViewadminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
