import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HighlightsBannerComponent } from './highlights-banner/highlights-banner.component';
import { ThingsWeDoComponent } from './things-we-do/things-we-do.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';


@NgModule({
  declarations: [
    HomeComponent,
    HighlightsBannerComponent,
    ThingsWeDoComponent,
    LatestNewsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
