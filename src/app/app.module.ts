import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteTemplateComponent } from './_layout/site-template/site-template.component';
import { SiteTemplateHeaderComponent } from './_layout/site-template-header/site-template-header.component';
import { SiteTemplateFooterComponent } from './_layout/site-template-footer/site-template-footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatMaterialModuleModule } from './mat-material-module/mat-material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SiteTemplateComponent,
    SiteTemplateHeaderComponent,
    SiteTemplateFooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMaterialModuleModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
