import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Account/register/register.component';
//import reactive form
import { ReactiveFormsModule } from '@angular/forms';
import { MatmodualsModule } from './matmoduals/matmoduals.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Account/login/login.component';
import { PermisionComponent } from './dailogbox/permision/permision.component';
import { SnakbarComponent } from './dailogbox/snakbar/snakbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgChartsModule } from 'ng2-charts';

// import { MyCustomPipe } from './my-custom-pipe';
// MyCustomPipe


@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent, PermisionComponent, SnakbarComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatmodualsModule,
    HttpClientModule,
    NgChartsModule,


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
