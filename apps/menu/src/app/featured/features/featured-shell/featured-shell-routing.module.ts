import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedProductsComponent } from '../featured-products/featured-products.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturedProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedShellRoutingModule { }
