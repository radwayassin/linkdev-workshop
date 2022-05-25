import {Component, OnInit} from '@angular/core';
import {Categories, Category, HighlightBanner, News, NewsItem, Slide} from '../models/home';
import {HomeService} from '../services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  highlightBannerList : Slide[] =[];
  newsList: NewsItem[] = [];
  filteredNews: NewsItem[] = [];
  categoriesList:Category[] = [];

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getHighlightsBanner();
    this.getAllNews();
    this.getCategories();
  }

  getHighlightsBanner() {
    this.homeService.getHighlightBannerData().subscribe((res: HighlightBanner) => {
      this.highlightBannerList = res.slides;
    }, (error: string) => {
      console.log(error);
    })
  }

  getAllNews() {
    this.homeService.getNewsList().subscribe((res: News) => {
      this.newsList = res.News;
      this.mapCategoriesData();
      this.filteredNews = this.newsList;
    }, (error: string) => {
      console.log(error);
    })
  }

  mapCategoriesData() {
    if(this.newsList.length > 0 && this.categoriesList.length > 0) {
      this.newsList.map((item)=> {
        this.categoriesList.map((category)=> {
          if(+item.categoryID === category.id){
            item.categoryName = category.name ;
          }
        });
      });
    }
  }

  getCategories() {
    this.homeService.getNewsCategories().subscribe((res: Categories) => {
      this.categoriesList = res.newsCategory;
    }, (error: string) => {
      console.log(error);
    })
  }

  handleChangeCategory(event: { categoryId: number | null }) {
    if (!event.categoryId) {
      this.filteredNews = this.newsList;
    } else {
      this.filteredNews = this.newsList.filter((item) => {
        return +item.categoryID == event.categoryId;
      });
    }
  }

}
