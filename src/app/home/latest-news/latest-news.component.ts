import {Category, NewsItem} from './../../models/home';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  @Input() categoriesList : Category[] =[];
  @Input() newsList: NewsItem[]= [];
  @Output() changeCategoryEvent = new EventEmitter<{categoryId: number| null}>();
  limit: number = 6;
  constructor() {}

  ngOnInit(): void {
  }

  selectCategory(id: number | null) {
    this.limit= 6 ;
    this.changeCategoryEvent.emit({categoryId: id });
  }

  viewAllNews() {
    this.limit = this.newsList.length;
  }
}
