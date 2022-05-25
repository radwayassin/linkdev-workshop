import {NewsItem} from './../../../models/home';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Category} from "../../../models/home";

@Component({
  selector: 'app-news-item-card',
  templateUrl: './news-item-card.component.html',
  styleUrls: ['./news-item-card.component.scss']
})
export class NewsItemCardComponent implements OnInit{
  @Input() newsItem: NewsItem | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
