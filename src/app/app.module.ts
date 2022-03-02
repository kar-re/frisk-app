import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OmOssComponent } from './om-oss/om-oss.component';
import { ListaComponent } from './lista/lista.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AktivitetComponent } from './aktivitet/aktivitet.component';

@NgModule({
  declarations: [
    AppComponent,
    OmOssComponent,
    ListaComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AktivitetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
