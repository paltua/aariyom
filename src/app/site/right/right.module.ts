import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommingEventComponent } from './comming-event/comming-event.component';
import { ArchiveEventComponent } from './archive-event/archive-event.component';



@NgModule({
  declarations: [CommingEventComponent, ArchiveEventComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommingEventComponent,
    ArchiveEventComponent
  ]
})
export class RightModule { }
