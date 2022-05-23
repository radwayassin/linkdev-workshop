import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HighlightsBannerComponent } from './highlights-banner/highlights-banner.component';
import { ThingsWeDoComponent } from './things-we-do/things-we-do.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { NewsItemCardComponent } from './latest-news/news-item-card/news-item-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    HighlightsBannerComponent,
    ThingsWeDoComponent,
    LatestNewsComponent,
    NewsItemCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
