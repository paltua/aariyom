import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'events', loadChildren: './events/events.module#EventsModule' },
  { path: 'functional-unit', loadChildren: () => import('./fu/fu.module').then(m => m.FuModule) },
  { path: 'programme', loadChildren: () => import('./programme/programme.module').then(m => m.ProgrammeModule) },
  { path: 'event-details', loadChildren: './events/events.module#EventsModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
