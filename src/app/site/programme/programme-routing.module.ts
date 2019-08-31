import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammeListingComponent } from './programme-listing/programme-listing.component';


const routes: Routes = [
  { path: '', component: ProgrammeListingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammeRoutingModule { }
