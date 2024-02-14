import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from "./shared/shared.module";


//CONFIGURACION DEL locale de la app

import localeEsMx from '@angular/common/locales/es-MX'
import localeFrCA from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common';


registerLocaleData(localeEsMx);
registerLocaleData(localeFrCA);

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
      {
        //Establece este local en toda la aplicaicon
        provide:LOCALE_ID,
        useValue:'es-MX',
      }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ButtonModule,
        SharedModule,
    ]
})
export class AppModule { }
