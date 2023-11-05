import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { AdvertComponent } from './advert.component';
import { AdvertContentComponent } from './components/advert-content/advert-content.component';
import {RouterLink} from "@angular/router";
import { PhoneNumberModalComponent } from './components/advert-content/components/phone-number-modal/phone-number-modal.component';
import {CarouselModule} from "primeng/carousel";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    AdvertComponent,
    AdvertContentComponent,
    PhoneNumberModalComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        NgOptimizedImage,
        CarouselModule,
        DialogModule,
    ],
})
export class AdvertModule { }
