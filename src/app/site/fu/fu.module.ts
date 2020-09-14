import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuRoutingModule } from './fu-routing.module';
import { FuDetailsComponent } from './fu-details/fu-details.component';
import { FuListingComponent } from './fu-listing/fu-listing.component';
import { RightModule } from '../right/right.module';


@NgModule({
  declarations: [FuDetailsComponent, FuListingComponent],
  imports: [
    CommonModule,
    FuRoutingModule,
    RightModule,
  ]
})
export class FuModule { }
