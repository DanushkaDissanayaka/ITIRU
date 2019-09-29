import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  localPrice = [
    {
      discription: "Student (First Author)",
      nonIEEEMember: 10000,
      IEEEMember: 15000
    },
    {
      discription: "Author",
      nonIEEEMember: 13000,
      IEEEMember: 15000
    },
    {
      discription: "Additional Paper Registration – Student First Author",
      nonIEEEMember: 8000,
      IEEEMember: 10000
    },
    {
      discription: "Additional Paper Registration – Author ",
      nonIEEEMember: 10000,
      IEEEMember: 11000
    },

  ]

  localPriceCommon = [
    {
      discription: "Participants ",
      price: 5000,
    },
    {
      discription: "Extra Conference Proceedings",
      price: 2500,
    },
    {
      discription: "Extra Banquet Ticket",
      price: 4000,
    },
  ]
  foreignPrice = [
    {
      discription: "Student (First Author)",
      nonIEEEMember: 100,
      IEEEMember: 170
    },
    {
      discription: "Author",
      nonIEEEMember: 170,
      IEEEMember: 220
    },
    {
      discription: "Additional Paper Registration – Student First Author",
      nonIEEEMember: 80,
      IEEEMember: 120
    },
    {
      discription: "Additional Paper Registration – Author ",
      nonIEEEMember: 130,
      IEEEMember: 150
    },

  ]

  foreignPriceCommon = [
    {
      discription: "Participants ",
      price: 40,
    },
  ]
  constructor() {

  }

  ngOnInit() {
  }

}
