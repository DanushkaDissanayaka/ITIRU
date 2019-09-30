import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  activeId:number = 0;

  ngOnInit() {
  }

  routerActive(id:number){
    this.activeId = id;
  }

}
