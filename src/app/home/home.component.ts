import { Component, OnInit } from '@angular/core';
import { NewsCardModel } from './models/newsCard.model';
import { getLocaleEraNames } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  FinanciallySponsers:Array<String> = [
    "../../assets/financialSponsers/ifs.jpg",

  ]

  organise:Array<String> = [
    "../../assets/organizeBy/itrulogo.png",
    "../../assets/organizeBy/logoUoM.png",    
  ]

  technicalCoSponsers:Array<String> = [
    "../../assets/technicallySponser/IEEE_logo.png",
    "../../assets/technicallySponser/IEEE_SL_logo.png",   
    "../../assets/technicallySponser/RA_logo.png",    

  ]

  news1:NewsCardModel;
  constructor() { }

  ngOnInit() {
    this.news1 = new NewsCardModel
    this.news1.Date = "28 SEP 2019"
    this.news1.Title="News Title"
    this.news1.Message= `Bootstrap’s grid system uses a series of containers,
                        rows, and columns to layout and align content. It’s built with flexbox and is fully responsive.
                        Below is an example and an in-depth look at how the grid comes together.`
  }

}
