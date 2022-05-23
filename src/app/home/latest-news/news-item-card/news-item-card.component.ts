import { Categories, NewsItem } from './../../../models/home';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-news-item-card',
  templateUrl: './news-item-card.component.html',
  styleUrls: ['./news-item-card.component.scss']
})
export class NewsItemCardComponent implements OnInit, OnChanges {
  @Input() newsItem: NewsItem | undefined;
  @Input() categoriesList: Categories | undefined;
  catName: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.categoriesList?.newsCategory.forEach((cat) => {
      if (cat.id == +this.newsItem!.categoryID) {
        this.catName = cat.name
      }
    })
  }

}
