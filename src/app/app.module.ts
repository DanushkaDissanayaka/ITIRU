import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { NewsCardComponent } from './home/news-card/news-card.component';
import { CallForPapersComponent } from './forAuthors/call-for-papers/call-for-papers.component';
import { KeynoteSpeakersComponent } from './keynote-speakers/keynote-speakers.component';
import { ImportantDatesComponent } from './forAuthors/important-dates/important-dates.component';
import { SubmitionGuidLineComponent } from './forAuthors/submition-guid-line/submition-guid-line.component';
import { CammeraReayPapersComponent } from './forAuthors/cammera-reay-papers/cammera-reay-papers.component';
import { PresenterInformationComponent } from './forAuthors/presenter-information/presenter-information.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
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
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
