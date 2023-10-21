import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderModule} from "./shared/components/header/header.module";
import {MainPageComponent} from './pages/main-page/main-page.component';
import {MainPageModule} from "./pages/main-page/main-page.module";
import {CreateAdvComponent} from './pages/create-adv/create-adv.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ApiModule} from "./api/api.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreateAdvComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    MainPageModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ApiModule.forRoot({rootUrl: 'http://194.87.237.48:5000'}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
