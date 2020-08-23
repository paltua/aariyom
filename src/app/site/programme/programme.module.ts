import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgrammeRoutingModule } from './programme-routing.module';
import { ProgrammeListingComponent } from './programme-listing/programme-listing.component';
import { RightModule } from '../right/right.module';
import { ProgrammeDetailsComponent } from './programme-details/programme-details.component';


@NgModule({
  declarations: [ProgrammeListingComponent, ProgrammeDetailsComponent],
  imports: [
    CommonModule,
    ProgrammeRoutingModule,
    RightModule,
  ]
})
export class ProgrammeModule { }
