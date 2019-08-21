import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EventRoutingModule } from './event-routing.module';
import { ListingComponent } from './listing/listing.component';
import { AddEditComponent } from './add-edit/add-edit.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [ListingComponent, AddEditComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    CKEditorModule,
    NgbModule,
  ]
})
export class EventModule { }
