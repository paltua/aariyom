import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcLoaderComponent } from './ac-loader/ac-loader.component';



@NgModule({
  declarations: [AcLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [AcLoaderComponent]
})
export class ACommonModule { }
