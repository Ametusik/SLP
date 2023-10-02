import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {CascadeSelectModule} from "primeng/cascadeselect";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { CategoriesListComponent } from './components/search-panel/components/categories-list/categories-list.component';
import { SearchInputComponent } from './components/search-panel/components/search-input/search-input.component';
import {AuthModule} from "../../../modals/auth/auth.module";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    HeaderComponent,
    UserMenuComponent,
    SearchPanelComponent,
    CategoriesListComponent,
    SearchInputComponent
  ],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        CascadeSelectModule,
        HttpClientModule,
        FormsModule,
        AuthModule,
        RouterLink,
        RouterOutlet,
        ButtonModule
    ]
})
export class HeaderModule { }
