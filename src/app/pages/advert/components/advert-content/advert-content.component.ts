import {Component, Input, OnInit} from '@angular/core';
import {AdvertService} from "../../../../api/services/advert.service";
import {AdvertDto} from "../../../../api/models/advert-dto";
import {combineAll} from "rxjs";

@Component({
  selector: 'app-advert-content',
  templateUrl: './advert-content.component.html',
  styleUrls: ['./advert-content.component.scss']
})
export class AdvertContentComponent implements OnInit {
  @Input() id: string;
  advert: AdvertDto;
  images: string[] = [];
  getImgUrl: string = 'http://194.87.237.48:5000/Images/'
  visibleNumber: boolean = false;

  constructor(private advertService: AdvertService) {
  }

  ngOnInit(): void {
    this.advertService.advertIdGet$Response({id: this.id}).subscribe((data) => {
      this.advert = data.body;
      this.images = this.images.concat(data.body.imagesIds);

      for (let i: number = 0; i < this.images.length; i++) {
        this.images[i] = this.getImgUrl.concat(this.images[i]);
        console.log(this.images[i]);
      }

    })

  }

  showNumber():void{
    this.visibleNumber=true;
  }

}
