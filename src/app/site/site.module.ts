import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SliderComponent } from './home/slider/slider.component';
import { AboutFunctionalComponent } from './home/about-functional/about-functional.component';
import { UpcomingEventsComponent } from './home/upcoming-events/upcoming-events.component';
import { ActivitiesHomeComponent } from './home/activities-home/activities-home.component';
import { BannerComponent } from './home/banner/banner.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatRadioButton, MatRadioModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';
import { SWallMagazineComponent } from './s-wall-magazine/s-wall-magazine.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    SliderComponent,
    AboutFunctionalComponent,
    UpcomingEventsComponent,
    ActivitiesHomeComponent,
    BannerComponent,
    PageLoaderComponent,
    JoinUsComponent,
    SWallMagazineComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [PageLoaderComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class SiteModule { }
