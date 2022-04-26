import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './ProductPageComponents/product-page/product-page.component';
import { ProductResolverResolver } from './Resolvers/product-resolver.resolver';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'cart',component: CartComponent},
  {path:'product-page/:id', component: ProductPageComponent},
  {path:'home', component: HomePageComponent},
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/product-page/Jacket',  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CartComponent,ProductPageComponent]
