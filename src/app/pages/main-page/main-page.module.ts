import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {GalleryComponent} from './components/gallery/gallery.component';
import {CardComponent} from './components/gallery/components/card/card.component';
import {RouterLink} from "@angular/router";
import {MainPageComponent} from "./main-page.component";



@NgModule({
  declarations: [
    MainPageComponent,
    GalleryComponent,
    CardComponent,
    MainPageComponent
  ],
    exports: [
        MainPageComponent
    ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,

  ]
})
export class MainPageModule {
}
