import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path:'',
    component:WrapperComponent,
    children:[
      {
        path:'',
        loadChildren: () =>
    import("../home/home.module").then(
      (m) => m.HomeModule
    ),
      },       
{
  path:'about-us',
    loadChildren: () =>
      import("../about-us/about-us.module").then(
        (m) => m.AboutUsModule
      ),
  },
  {
    path:'contact-us',
      loadChildren: () =>
        import("../contact-us/contact-us.module").then(
          (m) => m.ContactUsModule
        ),
    },
    {
      path:'product',
        loadChildren: () =>
          import("../product/product.module").then(
            (m) => m.ProductModule
          ),
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
