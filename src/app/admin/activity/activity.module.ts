import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ListingComponent } from './listing/listing.component';
import { AddEditComponent } from './add-edit/add-edit.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [ListingComponent, AddEditComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    CKEditorModule,
    NgbModule,
  ]
})
export class ActivityModule { }
