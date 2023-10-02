import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from "./shared/components/header/header.module";
import { MainPageComponent } from './pages/main-page/main-page.component';
import {MainPageModule} from "./pages/main-page/main-page.module";
import { CreateAdvComponent } from './pages/create-adv/create-adv.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreateAdvComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    MainPageModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
