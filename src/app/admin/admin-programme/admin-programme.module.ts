import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProgrammeRoutingModule } from './admin-programme-routing.module';
import { ProListingComponent } from './pro-listing/pro-listing.component';
import { ProAddEditComponent } from './pro-add-edit/pro-add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { DataTablesModule } from 'angular-datatables';
import { ProDeleteComponent } from './pro-delete/pro-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [ProListingComponent, ProAddEditComponent, ProDeleteComponent],
  imports: [
    CommonModule,
    AdminProgrammeRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    CKEditorModule,
  ],
})
export class AdminProgrammeModule { }
