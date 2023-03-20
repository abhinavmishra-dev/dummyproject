import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeRoutingModule } from './theme-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WrapperComponent } from './wrapper/wrapper.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
