import {Component, Input, OnInit} from '@angular/core';
import {Advert} from "../../../../../../shared/entities/advert";
import {ImageService} from "../../../../../../shared/services/image.service";
import {Image} from "../../../../../../shared/entities/image";
import {ShortAdvertDto} from "../../../../../../api/models/short-advert-dto";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() advert: ShortAdvertDto;
  imageUrl: string = 'http://194.87.237.48:5000/Images/';

  constructor() {

  }

  ngOnInit() {
    debugger
    this.imageUrl = this.imageUrl.concat(this.advert.imagesIds[0]);
    console.log(this.imageUrl);
  }

}
