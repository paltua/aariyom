import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventRoutingModule } from './event-routing.module';
import { ListingComponent } from './listing/listing.component';
import { AddEditComponent } from './add-edit/add-edit.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DataTablesModule } from 'angular-datatables';
import { DeleteComponent } from './delete/delete.component';
import { ImageComponent } from './image/image.component';



@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    CKEditorModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ],
  declarations: [
    ListingComponent,
    AddEditComponent,
    DeleteComponent,
    ImageComponent,
  ]
})
export class EventModule { }
