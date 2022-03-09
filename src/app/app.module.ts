import { ErrorHandler, NgModule, ChangeDetectorRef } from '@angular/core';
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
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { GeneratorComponent } from './generator/generator.component';
import { Aktivitet404Component } from './aktivitet404/aktivitet404.component';
import { ErroralertComponent } from './erroralert/erroralert.component';
import { WikipediaService } from './wikipedia.service';
import { SkatteverketService } from './skatteverket.service';
import { ErrorService } from './error.service';

@NgModule({
  declarations: [
    AppComponent,
    ErroralertComponent,
    OmOssComponent,
    ListaComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AktivitetComponent,
    SearchBarComponent,
    FilterPipe,
    FormComponent,
    GeneratorComponent,
    Aktivitet404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [ WikipediaService, SkatteverketService, ErrorService,
    {provide: ErrorHandler, useClass: ErroralertComponent}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
