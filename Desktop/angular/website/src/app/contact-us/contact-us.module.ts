import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ReachOutComponent } from './reach-out/reach-out.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    WrapperComponent,
    ReachOutComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    HomeModule
  ]
})
export class ContactUsModule { }
