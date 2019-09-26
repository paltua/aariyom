import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ImageComponent } from './image/image.component';


const routes: Routes = [
  { path: '', component: ListingComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'add', component: AddEditComponent },
  { path: 'edit/:event_id', component: AddEditComponent },
  { path: 'delete/:event_id', component: DeleteComponent },
  { path: 'image/:event_id', component: ImageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
