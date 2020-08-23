import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FunctionalUnitRoutingModule } from './functional-unit-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListingComponent } from './listing/listing.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [AddEditComponent, ListingComponent, DeleteComponent],
  imports: [
    CommonModule,
    FunctionalUnitRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    CKEditorModule,
  ]
})
export class FunctionalUnitModule { }
