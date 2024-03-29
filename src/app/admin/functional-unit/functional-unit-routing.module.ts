import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListingComponent } from './listing/listing.component';
import { DeleteComponent } from './delete/delete.component';
import { ImageComponent } from './image/image.component';


const routes: Routes = [
  { path: '', component: ListingComponent },
  { path: 'add', component: AddEditComponent },
  { path: 'image/:fu_id', component: ImageComponent },
  { path: 'edit/:fu_id', component: AddEditComponent },
  { path: 'delete/:fu_id', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionalUnitRoutingModule { }
