import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './ProductPageComponents/product-page/product-page.component';
import { ProductResolverResolver } from './Resolvers/product-resolver.resolver';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';
import { SearchPageComponent } from './search-page/search-page.component';


const routes: Routes = [
  {path:'cart',component: CartComponent , canActivate:[AuthGuard]},
  {path:'product-page/:id', component: ProductPageComponent, resolve:{
    productResolve:ProductResolverResolver
  }},
  {path:'home', component: HomePageComponent},
  {path:'search-page/:name', component: SearchPageComponent},
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'add-product', component: AddProductComponent , canActivate:[AdminGuard] },
  { path: '', redirectTo: '/home',  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CartComponent,ProductPageComponent]
