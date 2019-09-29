import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeynoteSpeakersComponent } from './keynote-speakers/keynote-speakers.component';

const routes: Routes = [
  {path:"keynote-speakers", component: KeynoteSpeakersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
