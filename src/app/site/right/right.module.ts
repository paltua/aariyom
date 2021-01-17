import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommingEventComponent } from './comming-event/comming-event.component';
import { ArchiveEventComponent } from './archive-event/archive-event.component';
import { InPageLoaderComponent } from './in-page-loader/in-page-loader.component';
import { ProgramByFuComponent } from './program-by-fu/program-by-fu.component';
import { EventByProgramComponent } from './event-by-program/event-by-program.component';
import { OthersProgrammeComponent } from './others-programme/others-programme.component';
import { OthersFusComponent } from './others-fus/others-fus.component';

@NgModule({
  declarations: [CommingEventComponent, ArchiveEventComponent, InPageLoaderComponent, ProgramByFuComponent, EventByProgramComponent, OthersProgrammeComponent, OthersFusComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommingEventComponent,
    ArchiveEventComponent,
    InPageLoaderComponent,
    ProgramByFuComponent,
    EventByProgramComponent,
    OthersProgrammeComponent,
    OthersFusComponent
  ]
})
export class RightModule { }
