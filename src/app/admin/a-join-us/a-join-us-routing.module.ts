import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjuListingComponent } from './aju-listing/aju-listing.component';


const routes: Routes = [
  { path: '', component: AjuListingComponent },
  { path: 'listing', component: AjuListingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AJoinUsRoutingModule { }
