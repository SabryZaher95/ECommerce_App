import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandComponent } from './components/brand/brand.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: 'brands', component: BrandComponent, canActivate: [AuthGuard]},
  {path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]},
  {path: 'productDetails/:id', component: ProductDetailsComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
