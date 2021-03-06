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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helper';
import { SafePipe } from './safe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SiteTemplateComponent,
    SiteTemplateHeaderComponent,
    SiteTemplateFooterComponent,
    PageNotFoundComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMaterialModuleModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
