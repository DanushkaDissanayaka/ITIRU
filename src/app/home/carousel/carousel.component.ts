import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: Array<string> = [
    "assets/carousel/1.jpg",
    "assets/carousel/2.jpg",
    "assets/carousel/3.jpg",
    "assets/carousel/4.jpg",
    "assets/carousel/5.jpg",


  ]
  constructor() { }

  ngOnInit() {
  }

}
