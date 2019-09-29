import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallForPapersComponent } from './forAuthors/call-for-papers/call-for-papers.component';
import { HomeComponent } from './home/home.component';
import { ImportantDatesComponent } from './forAuthors/important-dates/important-dates.component';
import { SubmitionGuidLineComponent } from './forAuthors/submition-guid-line/submition-guid-line.component';
import { CammeraReayPapersComponent } from './forAuthors/cammera-reay-papers/cammera-reay-papers.component';
import { PresenterInformationComponent } from './forAuthors/presenter-information/presenter-information.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'callForPapers',
    component: CallForPapersComponent
  },
  {
    path: 'important-dates',
    component: ImportantDatesComponent
  },
  {
    path: 'Author_instructions',
    component: SubmitionGuidLineComponent
  },
  {
    path: 'cammera-reay-papers',
    component: CammeraReayPapersComponent
  },
  {
    path: 'Presenter-information',
    component: PresenterInformationComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
