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


@NgModule({
  declarations: [HomeComponent, AboutUsComponent, ContactUsComponent, SliderComponent, AboutFunctionalComponent, UpcomingEventsComponent, ActivitiesHomeComponent, BannerComponent],
  imports: [
    CommonModule,
    SiteRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class SiteModule { }
