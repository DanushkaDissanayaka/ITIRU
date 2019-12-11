import { Component, OnInit } from '@angular/core';
import { NewsCardModel } from './models/newsCard.model';
import { getLocaleEraNames } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  goldSponsers: Array<String> = [
    "assets/financialSponsers/ifs.jpg",
    "assets/financialSponsers/BOC_Logo.png",
  ]

  organise: Array<String> = [
    "assets/organizeBy/itrulogo.png",
    "assets/organizeBy/logoUoM.png",
  ]

  silverSponsers: Array<String> = [
    "assets/financialSponsers/Mobitel_logo.png",
    "assets/financialSponsers/softLogic_logo.jpg",
  ]

  news1: NewsCardModel;
  news2: NewsCardModel;
  constructor() { }

  ngOnInit() {
    this.news1 = new NewsCardModel
    this.news1.Date = "08 Nov 2019"
    this.news1.Title = "Submission is now open"
    this.news1.Message = `<p>Submit your paper <a href = 'https://easychair.org/conferences/?conf=icitr2019'>here</a>,
                         before you submit please read the Author Instructions. <br>
                         Submission is due on 20<sup>th</sup>November 2019.
                         </p>`

    this.news2 = new NewsCardModel
    this.news2.Date = "11 Nov 2019"
    this.news2.Title = "Detailed Program"
    this.news2.Message = `<p>Detailed Program available at <a href = 'https://easychair.org/conferences/?conf=icitr2019'>here</a>,
                         before you submit please read the Author Instructions. <br>
                         Submission is due on 15<sup>th</sup>November 2019.
                         </p>`
  }

}
