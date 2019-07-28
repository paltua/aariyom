import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteTemplateComponent } from './_layout/site-template/site-template.component';
import { AdminTemplateComponent } from './_layout/admin-template/admin-template.component';
import { SiteTemplateHeaderComponent } from './_layout/site-template-header/site-template-header.component';
import { SiteTemplateFooterComponent } from './_layout/site-template-footer/site-template-footer.component';
import { AdminTemplateHeaderComponent } from './_layout/admin-template-header/admin-template-header.component';
import { AdminTemplateFooterComponent } from './_layout/admin-template-footer/admin-template-footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatMaterialModuleModule } from './mat-material-module/mat-material-module.module';

@NgModule({
  declarations: [
    AppComponent,
    SiteTemplateComponent,
    AdminTemplateComponent,
    SiteTemplateHeaderComponent,
    SiteTemplateFooterComponent,
    AdminTemplateHeaderComponent,
    AdminTemplateFooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMaterialModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
