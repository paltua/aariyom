import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionalUnitRoutingModule } from './functional-unit-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [AddEditComponent],
  imports: [
    CommonModule,
    FunctionalUnitRoutingModule
  ]
})
export class FunctionalUnitModule { }
