import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsListingComponent } from './events-listing/events-listing.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { EventDetailsComponent } from './event-details/event-details.component';
@NgModule({
  declarations: [EventsListingComponent, EventDetailsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatPaginatorModule,
    MatSelectModule
  ]
})
export class EventsModule { }
