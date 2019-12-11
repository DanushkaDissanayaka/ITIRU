import { Component, OnInit, Input } from '@angular/core';
import {TableContent,TableModel} from '../models/TableModel';
  import { from } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('content') content:TableModel

  constructor() {
   }

  ngOnInit() {
  }

}
