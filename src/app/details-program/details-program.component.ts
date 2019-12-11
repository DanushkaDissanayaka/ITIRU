import { Component, OnInit } from '@angular/core';
import { TableContent, TableModel } from './models/TableModel';


@Component({
  selector: 'app-details-program',
  templateUrl: './details-program.component.html',
  styleUrls: ['./details-program.component.scss']
})
export class DetailsProgramComponent implements OnInit {

  icitrS1: TableModel
  icitrS2: TableModel
  icitrS3: TableModel
  icitrS4: TableModel
  itruS1: TableModel
  itruS2: TableModel
  itruS3: TableModel
  itruS4: TableModel
  constructor() {
    this.icitrS1 = new TableModel();
    this.icitrS1.title = "ICITR Technical Session (ICITR-S1)";
    this.icitrS1.chair = "Dr. T.S.S Jayawaradena"
    this.icitrS1.coChair = "Dr.(Mrs.) T.C. Sandanayake"
    this.icitrS1.content = [
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
    ];
    this.icitrS2 = new TableModel();
    this.icitrS2.title = "ICITR Technical Session (ICITR-S2)";
    this.icitrS2.chair = "Prof. Syoji Kobashi"
    this.icitrS2.coChair = "Prof. R.A.R.C. Gopura"
    this.icitrS2.content = [
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
    ];


    this.itruS1 = new TableModel();
    this.itruS1.title = "ITRU Symposium Technical Session (ITRU-S1)";
    this.itruS1.chair = "Dr. K.S.D. Fernando"
    this.itruS1.coChair = "Dr.Thilak Chaminda"
    this.itruS1.content = [
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
    ];
    this.itruS2 = new TableModel();
    this.itruS2.title = "ITRU Symposium Technical Session (ITRU-S2)";
    this.itruS2.chair = "Dr. Pradeep Kalansooriya"
    this.itruS2.coChair = "Dr. L. Ranathunga"
    this.itruS2.content = [
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
    ];

    /**
     * Day 2
     */
    this.icitrS3 = new TableModel();
    this.icitrS3.title = "ICITR Technical Session (ICITR-S3)";
    this.icitrS3.chair = "Prof. Chinthaka Premachandra"
    this.icitrS3.coChair = "Mr. C.P. Wijesiriwardena"
    this.icitrS3.content = [
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
    ];

    this.icitrS4 = new TableModel();
    this.icitrS4.title = "ICITR Technical Session (ICITR-S4)";
    this.icitrS4.chair = "Prof. Hooman Samani"
    this.icitrS4.coChair = "Dr. Palitha Dassanayake"
    this.icitrS4.content = [
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
    ];

    this.itruS3 = new TableModel();
    this.itruS3.title = "ITRU Symposium Technical Session (ITRU-S3)";
    this.itruS3.chair = "Prof. Chan-Yun Yang"
    this.itruS3.coChair = "Dr. Surangani Bandara"
    this.itruS3.content = [
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
    ];

    this.itruS4 = new TableModel();
    this.itruS4.title = "ITRU Symposium Technical Session (ITRU-S4)";
    this.itruS4.chair = "Dr. Sidath Liyanage"
    this.itruS4.coChair = "Mr. S.C. Premaratne"
    this.itruS4.content = [
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
      { time: "9.30 AM", Presenter: "Some Presenter1", Paper: "some paper1" },
    ];
     
  }

  ngOnInit() {
  }

}
