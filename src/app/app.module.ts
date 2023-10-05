import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from "./shared/components/header/header.module";
import { MainPageComponent } from './pages/main-page/main-page.component';
import {MainPageModule} from "./pages/main-page/main-page.module";
import { CreateAdvComponent } from './pages/create-adv/create-adv.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RusFormatDate } from './shared/pipes/rusFormatDate';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreateAdvComponent,
    RusFormatDate
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    MainPageModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
