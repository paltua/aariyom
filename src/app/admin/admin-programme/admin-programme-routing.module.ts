import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProListingComponent } from './pro-listing/pro-listing.component';
import { ProAddEditComponent } from './pro-add-edit/pro-add-edit.component';


const routes: Routes = [
  { path: 'listing', component: ProListingComponent },
  { path: 'add-edit', component: ProAddEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProgrammeRoutingModule { }
