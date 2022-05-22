import { Component, OnInit } from '@angular/core';
import { Categories, HighlightBanner, News } from '../models/home';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  highlightBannerList = {} as HighlightBanner;
  newsList = {} as News;
  categoriesList = {} as Categories;
  constructor(private homeService: HomeServiceService) { }

  ngOnInit(): void {
    this.getHighlightsBanner();
    this.getAllNews();
    this.getCategories();
  }
  getHighlightsBanner() {
    this.homeService.getHighlightBannerData().subscribe((res) => {
      this.highlightBannerList = res;
      console.log(this.highlightBannerList);

    }, (error) => {
      console.log(error);
    })
  }

  getAllNews() {
    this.homeService.getNewsList().subscribe((res) => {
      this.newsList = res
      console.log(this.newsList);
    }, (error) => {
      console.log(error);
    })
  }

  getCategories() {
    this.homeService.getNewsCategories().subscribe((res) => {
      this.categoriesList = res;
      console.log(this.categoriesList);
    }, (error) => {
      console.log(error);
    })
  }
}
