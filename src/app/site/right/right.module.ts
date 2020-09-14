import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommingEventComponent } from './comming-event/comming-event.component';
import { ArchiveEventComponent } from './archive-event/archive-event.component';
import { InPageLoaderComponent } from './in-page-loader/in-page-loader.component';
import { ProgramByFuComponent } from './program-by-fu/program-by-fu.component';
import { EventByProgramComponent } from './event-by-program/event-by-program.component';

@NgModule({
  declarations: [CommingEventComponent, ArchiveEventComponent, InPageLoaderComponent, ProgramByFuComponent, EventByProgramComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommingEventComponent,
    ArchiveEventComponent,
    InPageLoaderComponent,
  ]
})
export class RightModule { }
