import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CardComponent } from './components/gallery/components/card/card.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    GalleryComponent,
    CardComponent
  ],
  exports: [
    GalleryComponent
  ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        RouterLink
    ]
})
export class MainPageModule { }
