import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { AddressComponent } from './address/address.component';
import { ContentdemoComponent } from './contentdemo/contentdemo.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AddressComponent,
    ContentdemoComponent
  ],
  imports: [
    CommonModule,
    LearnRoutingModule,
    HttpClientModule
  ], providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class LearnModule { }
