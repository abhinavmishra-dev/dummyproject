import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    WrapperComponent,
    BannerComponent,
    CardComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports:[
    CardComponent,
    BannerComponent
  ]
})
export class HomeModule { }
