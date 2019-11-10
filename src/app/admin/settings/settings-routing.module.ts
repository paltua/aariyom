import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingHomeComponent } from './setting-home/setting-home.component';
import { SettingContactUsComponent } from './setting-contact-us/setting-contact-us.component';
import { SettingAboutUsComponent } from './setting-about-us/setting-about-us.component';
import { AuthGuard } from '../../_guards';


const routes: Routes = [
  { path: 'home', component: SettingHomeComponent, canActivate: [AuthGuard] },
  { path: 'contact-us', component: SettingContactUsComponent, canActivate: [AuthGuard] },
  { path: 'about-us', component: SettingAboutUsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
