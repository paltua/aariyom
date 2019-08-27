import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginTemplateComponent } from '../_layout/admin-login-template/admin-login-template.component';
import { AdminTemplateComponent } from './../_layout/admin-template/admin-template.component';

const routes: Routes = [
  { path: 'auth', component: AdminLoginTemplateComponent, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', component: AdminTemplateComponent, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'functional-unit', component: AdminTemplateComponent, loadChildren: () => import('./functional-unit/functional-unit.module').then(m => m.FunctionalUnitModule) },
  { path: 'event', component: AdminTemplateComponent, loadChildren: () => import('./event/event.module').then(m => m.EventModule) },
  { path: 'activity', component: AdminTemplateComponent, loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule) },
  { path: 'contact', component: AdminTemplateComponent, loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'user', component: AdminTemplateComponent, loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
