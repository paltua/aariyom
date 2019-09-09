import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProgrammeRoutingModule } from './admin-programme-routing.module';
import { ProListingComponent } from './pro-listing/pro-listing.component';
import { ProAddEditComponent } from './pro-add-edit/pro-add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';




@NgModule({
  declarations: [ProListingComponent, ProAddEditComponent],
  imports: [
    CommonModule,
    AdminProgrammeRoutingModule,
    FormsModule,
    ReactiveFormsModule, MatToolbarModule, MatInputModule, MatTableModule
  ],
})
export class AdminProgrammeModule { }
