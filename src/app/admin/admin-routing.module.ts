import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginTemplateComponent } from '../_layout/admin-login-template/admin-login-template.component';
import { AdminTemplateComponent } from './../_layout/admin-template/admin-template.component';


const routes: Routes = [
  {path:'auth', component:AdminLoginTemplateComponent, loadChildren:'./auth/auth.module#AuthModule'},
  {path:'dashboard',component:AdminTemplateComponent,  loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  {path:'event',component:AdminTemplateComponent,  loadChildren:'./event/event.module#EventModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
