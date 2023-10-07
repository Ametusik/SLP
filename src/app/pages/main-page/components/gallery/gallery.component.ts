import {Component, OnInit} from '@angular/core';


import {AdvertService} from "../../../../api/services/advert.service";
import {ShortAdvertDto} from "../../../../api/models/short-advert-dto";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  advertList: ShortAdvertDto[] = [];

  constructor(private advertService: AdvertService) {
  }

  ngOnInit(): void {
    this.advertService.advertSearchPost$Response({body: {search: ''}})
      .subscribe((data) => this.advertList = data.body)
  }

}
