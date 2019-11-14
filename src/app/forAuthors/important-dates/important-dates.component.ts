import { Component, OnInit } from '@angular/core';
import {DatesService} from '../../service/dates.service'

@Component({
  selector: 'app-important-dates',
  templateUrl: './important-dates.component.html',
  styleUrls: ['./important-dates.component.scss']
})
export class ImportantDatesComponent implements OnInit {

  constructor(public _dateService:DatesService) { }

  ngOnInit() {
    console.log(this._dateService.Papersubmissiondeadline);
  }

}
