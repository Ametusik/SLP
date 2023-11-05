import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {MainPageModule} from "./pages/main-page/main-page.module";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {ApiModule} from "./api/api.module";
import {AdvertModule} from "./pages/advert/advert.module";
import {HttpClientModule} from "@angular/common/http";
import {HeaderModule} from "./shared/components/header/header.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    ApiModule.forRoot({rootUrl: 'http://194.87.237.48:5000'}),
    HttpClientModule,
    HeaderModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
