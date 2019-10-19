import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgrammeRoutingModule } from './programme-routing.module';
import { ProgrammeListingComponent } from './programme-listing/programme-listing.component';
import { RightModule } from '../right/right.module';


@NgModule({
  declarations: [ProgrammeListingComponent],
  imports: [
    CommonModule,
    ProgrammeRoutingModule,
    RightModule,
  ]
})
export class ProgrammeModule { }
