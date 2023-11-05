import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdvertService} from "../../api/services/advert.service";
import {AdvertDto} from "../../api/models/advert-dto";

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit{

  id: string;
  advert: AdvertDto;

  constructor(private activatedRoute: ActivatedRoute, private advertService:AdvertService) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
