import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginTemplateComponent } from '../_layout/admin-login-template/admin-login-template.component';
import { AdminTemplateComponent } from './../_layout/admin-template/admin-template.component';
import { AuthGuard } from '../_guards';

const routes: Routes = [
  { path: 'auth', component: AdminLoginTemplateComponent, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', component: AdminTemplateComponent, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'functional-units', component: AdminTemplateComponent, loadChildren: () => import('./functional-unit/functional-unit.module').then(m => m.FunctionalUnitModule), canActivate: [AuthGuard] },
  { path: 'events', component: AdminTemplateComponent, loadChildren: () => import('./event/event.module').then(m => m.EventModule), canActivate: [AuthGuard] },
  { path: 'programs', component: AdminTemplateComponent, loadChildren: () => import('./admin-programme/admin-programme.module').then(m => m.AdminProgrammeModule), canActivate: [AuthGuard] },
  { path: 'contacts', component: AdminTemplateComponent, loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule), canActivate: [AuthGuard] },
  { path: 'users', component: AdminTemplateComponent, loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },
  { path: 'settings', component: AdminTemplateComponent, loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
