import {Component, Input, Output} from '@angular/core';
import {Advert} from "../../../../../../shared/entities/advert";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

    @Input() advert:Advert;
  protected readonly Advert = Advert;
}
