import { NewsItem } from './../../models/home';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Categories, News } from 'src/app/models/home';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit, OnChanges {
  @Input() categoriesList = {} as Categories;
  @Input() newsList: NewsItem[] | undefined;
  filteredNews: NewsItem[] | undefined;
  limit: number | undefined = 6
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.filteredNews = this.newsList;
  }
  selectCategory(id: number) {
    this.newsList = this.filteredNews?.filter((newsItem) => {
      // return newsItem.categoryID.includes(id);
    })
  }
  listAllNews() {
    this.newsList = this.filteredNews;
  }
  viewAllNews() {
    this.limit = this.filteredNews?.length;
  }
}
