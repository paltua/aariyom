import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgrammeRoutingModule } from './programme-routing.module';
import { ProgrammeListingComponent } from './programme-listing/programme-listing.component';


@NgModule({
  declarations: [ProgrammeListingComponent],
  imports: [
    CommonModule,
    ProgrammeRoutingModule
  ]
})
export class ProgrammeModule { }
