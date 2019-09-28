import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { NewsCardComponent } from './home/news-card/news-card.component';
import { CallForPapersComponent } from './forAuthors/call-for-papers/call-for-papers.component';
import { KeynoteSpeakersComponent } from './keynote-speakers/keynote-speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    NewsCardComponent,
    CallForPapersComponent,
    KeynoteSpeakersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
