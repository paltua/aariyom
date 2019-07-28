import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'auth', loadChildren:'./auth/auth.module#AuthModule'},
  {path:'dashboard', component:DashboardComponent},
  {path:'event', loadChildren:'./event/event.module#EventModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
