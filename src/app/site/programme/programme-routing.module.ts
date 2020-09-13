import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammeListingComponent } from './programme-listing/programme-listing.component';
import { ProgrammeDetailsComponent } from './programme-details/programme-details.component';


const routes: Routes = [
  { path: '', component: ProgrammeListingComponent },
  { path: 'details/:programme_id', component: ProgrammeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammeRoutingModule { }
