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
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
