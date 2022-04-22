import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductPageComponent } from './ProductPageComponents/product-page/product-page.component';


const routes: Routes = [
  {path:'cart',component: CartComponent},
  {path:'product-page', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CartComponent,ProductPageComponent]
