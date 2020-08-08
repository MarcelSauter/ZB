import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactComponent} from './contact/contact.component';
import {HistoryComponent} from './history/history.component';
import {LegalNoticeComponent} from './legal-notice/legal-notice.component';


const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '*', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
