import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  // { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  // { path: 'learn', loadChildren: () => import('./learn/learn.module').then(m => m.LearnModule) },
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canLoad: [AuthGuard] },
  // { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'health', loadChildren: () => import('./health-form/health-form.module').then(m => m.HealthFormModule) },
  { path: '', redirectTo: '/health', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
