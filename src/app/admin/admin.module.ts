import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginTemplateComponent } from './../_layout/admin-login-template/admin-login-template.component';
import { AdminTemplateSidebarComponent } from './../_layout/admin-template-sidebar/admin-template-sidebar.component';
import { AdminTemplateComponent } from './../_layout/admin-template/admin-template.component';
import { AdminTemplateHeaderComponent } from './../_layout/admin-template-header/admin-template-header.component';
import { AdminTemplateFooterComponent } from './../_layout/admin-template-footer/admin-template-footer.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AdminTemplateComponent,
    AdminTemplateHeaderComponent,
    AdminTemplateFooterComponent,
    AdminLoginTemplateComponent,
    AdminTemplateSidebarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbDropdownModule,
  ]
})
export class AdminModule { }
