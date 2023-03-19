import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedShellRoutingModule } from './featured-shell-routing.module';
import { FeaturedProductsComponent } from '../featured-products/featured-products.component';

@NgModule({
  declarations: [FeaturedProductsComponent],
  imports: [CommonModule, FeaturedShellRoutingModule],
})
export class FeaturedShellModule {}
