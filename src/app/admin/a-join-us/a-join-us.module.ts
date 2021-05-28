import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AJoinUsRoutingModule } from './a-join-us-routing.module';
import { AjuListingComponent } from './aju-listing/aju-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ACommonModule } from '../a-common/a-common.module';


@NgModule({
  declarations: [AjuListingComponent],
  imports: [
    CommonModule,
    AJoinUsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    ACommonModule
  ]
})
export class AJoinUsModule { }
