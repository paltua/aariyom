import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingHomeComponent } from './setting-home/setting-home.component';
import { SettingAboutUsComponent } from './setting-about-us/setting-about-us.component';
import { SettingContactUsComponent } from './setting-contact-us/setting-contact-us.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ACommonModule } from '../a-common/a-common.module';


@NgModule({
  declarations: [SettingHomeComponent, SettingAboutUsComponent, SettingContactUsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    CKEditorModule,
    ACommonModule
  ]
})
export class SettingsModule { }
