import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatesService {
  Papersubmissiondeadline: Array<Date> = new Array();
  NotificationofAcceptance: Array<Date> = new Array();
  CamerareadyPaper: Array<Date> = new Array();
  RegistrationEarlyBird: Array<Date> = new Array();
  ConferenceDate: Array<Date> = new Array();
  constructor() {
    this.Papersubmissiondeadline.push(new Date(2019, 10, 20));
  }
}
