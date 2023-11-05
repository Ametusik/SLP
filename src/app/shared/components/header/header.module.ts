import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {CascadeSelectModule} from "primeng/cascadeselect";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserMenuComponent} from './components/user-menu/user-menu.component';
import {SearchPanelComponent} from './components/search-panel/search-panel.component';
import {CategoriesListComponent} from './components/search-panel/components/categories-list/categories-list.component';
import {SearchInputComponent} from './components/search-panel/components/search-input/search-input.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {LoginButtonComponent} from './components/user-menu/components/login-button/login-button.component';
import {AddAdvButtonComponent} from './components/user-menu/components/add-adv-button/add-adv-button.component';
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [
    HeaderComponent,
    UserMenuComponent,
    SearchPanelComponent,
    CategoriesListComponent,
    SearchInputComponent,
    LoginButtonComponent,
    AddAdvButtonComponent
  ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        CascadeSelectModule,
        HttpClientModule,
        FormsModule,
        RouterLink,
        RouterOutlet,
        ButtonModule,
        DialogModule,
        DropdownModule,
    ],
  exports:[
    HeaderComponent
  ]

})
export class HeaderModule {
}
