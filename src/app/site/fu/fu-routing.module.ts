import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuListingComponent } from './fu-listing/fu-listing.component';
import { FuDetailsComponent } from './fu-details/fu-details.component';


const routes: Routes = [
  { path: '', component: FuListingComponent },
  { path: 'details/:fu_id', component: FuDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuRoutingModule { }
