import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertComponent } from './advert.component';
import {HeaderModule} from "../../shared/components/header/header.module";



@NgModule({
  declarations: [
    AdvertComponent
  ],
    imports: [
        CommonModule,
        HeaderModule
    ]
})
export class AdvertModule { }
