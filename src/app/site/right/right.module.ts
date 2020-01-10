import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommingEventComponent } from './comming-event/comming-event.component';
import { ArchiveEventComponent } from './archive-event/archive-event.component';
import { InPageLoaderComponent } from './in-page-loader/in-page-loader.component';

@NgModule({
  declarations: [CommingEventComponent, ArchiveEventComponent, InPageLoaderComponent],
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
