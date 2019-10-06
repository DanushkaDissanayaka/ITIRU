import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { KeynoteSpeakersComponent } from './keynote-speakers/keynote-speakers.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { NewsCardComponent } from './home/news-card/news-card.component';
import { CallForPapersComponent } from './forAuthors/call-for-papers/call-for-papers.component';
import { ImportantDatesComponent } from './forAuthors/important-dates/important-dates.component';
import { SubmitionGuidLineComponent } from './forAuthors/submition-guid-line/submition-guid-line.component';
import { CammeraReayPapersComponent } from './forAuthors/cammera-reay-papers/cammera-reay-papers.component';
import { PresenterInformationComponent } from './forAuthors/presenter-information/presenter-information.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommitteesComponent } from './committees/committees.component';
import { AbstractComponent } from './keynote-speakers/abstract/abstract.component';
import { ProgramComponent } from './program/program.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Abstract2Component } from './keynote-speakers/abstract2/abstract2.component';
import { AccommodationOrTravelComponent } from './accommodation-or-travel/accommodation-or-travel.component';
import { TravelComponent } from './accommodation-or-travel/travel/travel.component';
import { AccommodationComponent } from './accommodation-or-travel/accommodation/accommodation.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { Workshop1Component } from './workshop/workshop1/workshop1.component';
import { Workshop2Component } from './workshop/workshop2/workshop2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    KeynoteSpeakersComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    NewsCardComponent,
    CallForPapersComponent,
    KeynoteSpeakersComponent,
    ImportantDatesComponent,
    SubmitionGuidLineComponent,
    CammeraReayPapersComponent,
    PresenterInformationComponent,
    RegistrationComponent,
    CommitteesComponent,
    AbstractComponent,
    ProgramComponent,
    ContactUsComponent,
    Abstract2Component,
    AccommodationOrTravelComponent,
    TravelComponent,
    AccommodationComponent,
    WorkshopComponent,
    Workshop1Component,
    Workshop2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
