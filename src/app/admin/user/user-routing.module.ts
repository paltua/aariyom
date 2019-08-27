import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { UserListingComponent } from './user-listing/user-listing.component';


const routes: Routes = [
  { path: '', component: UserListingComponent },
  { path: 'listing', component: UserListingComponent },
  { path: 'add', component: UserAddEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
