import { Component, OnInit, Input } from '@angular/core';
import { NewsCardModel } from '../models/newsCard.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
@Input('news') news:NewsCardModel
  constructor() { }

  ngOnInit() {
  }

}
