import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AWallMagazineRoutingModule } from './a-wall-magazine-routing.module';
import { AwmAddEditComponent } from './awm-add-edit/awm-add-edit.component';
import { AwmListingComponent } from './awm-listing/awm-listing.component';


@NgModule({
  declarations: [AwmAddEditComponent, AwmListingComponent],
  imports: [
    CommonModule,
    AWallMagazineRoutingModule
  ]
})
export class AWallMagazineModule { }
