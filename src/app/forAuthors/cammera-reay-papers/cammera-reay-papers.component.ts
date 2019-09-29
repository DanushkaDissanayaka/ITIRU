import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cammera-reay-papers',
  templateUrl: './cammera-reay-papers.component.html',
  styleUrls: ['./cammera-reay-papers.component.scss']
})
export class CammeraReayPapersComponent implements OnInit {
 defienition:string = `“\maketitle” code line. “\IEEEoverridecommandlockouts 
 \IEEEpubid"{\makebox[\columnwidth]{TBA \hfill} \hspace{\columnsep}\makebox[\columnwidth]{ }}"`
  constructor() { }

  ngOnInit() {
  }

}
