import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { UserListingComponent } from './user-listing/user-listing.component';


@NgModule({
  declarations: [UserAddEditComponent, UserListingComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
