import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ListingComponent } from './listing/listing.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [ListingComponent, AddEditComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
