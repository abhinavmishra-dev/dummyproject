import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';



@NgModule({
  declarations: [
    WrapperComponent,
    AboutcompanyComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
