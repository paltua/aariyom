import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProListingComponent } from './pro-listing/pro-listing.component';
import { ProAddEditComponent } from './pro-add-edit/pro-add-edit.component';
import { ProDeleteComponent } from './pro-delete/pro-delete.component';


const routes: Routes = [
  { path: '', component: ProListingComponent },
  { path: 'add', component: ProAddEditComponent },
  { path: 'edit/:id', component: ProAddEditComponent },
  { path: 'delete/:id', component: ProDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProgrammeRoutingModule { }
