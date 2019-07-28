import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteTemplateComponent } from './_layout/site-template/site-template.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminTemplateComponent } from './_layout/admin-template/admin-template.component';


const routes: Routes = [
  {path:'', component:SiteTemplateComponent, loadChildren:'./site/site.module#SiteModule'},
  {path:'admin', component:AdminTemplateComponent, loadChildren:'./admin/admin.module#AdminModule'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
