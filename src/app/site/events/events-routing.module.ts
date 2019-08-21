import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListingComponent } from './events-listing/events-listing.component';


const routes: Routes = [
  {path:'', component:EventsListingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
