import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListingComponent } from './events-listing/events-listing.component';
import { EventDetailsComponent } from './event-details/event-details.component';


const routes: Routes = [
  { path: '', component: EventsListingComponent },
  { path: '', component: EventDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
