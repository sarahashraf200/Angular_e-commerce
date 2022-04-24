import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './ProductPageComponents/product-page/product-page.component';
import { ProductResolverResolver } from './Resolvers/product-resolver.resolver';


const routes: Routes = [
  {path:'cart',component: CartComponent},
  {path:'product-page/:id', component: ProductPageComponent},
  {path:'home', component: HomePageComponent},
  { path: '', redirectTo: '/home',  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CartComponent,ProductPageComponent]
