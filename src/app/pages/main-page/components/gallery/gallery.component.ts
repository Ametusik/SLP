import {Component, OnInit} from '@angular/core';
import {AdvertService} from "../../../../shared/services/advert.service";
import {Advert} from "../../../../shared/entities/advert";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  advertList: Advert[] = [];

  constructor(private advertService: AdvertService) {
  }

  ngOnInit(): void {
    this.advertService.getAdvertList(null).subscribe((data: Advert[]) => (this.advertList = data))
  }

}
