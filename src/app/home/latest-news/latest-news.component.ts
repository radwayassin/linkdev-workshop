import { Component, Input, OnInit } from '@angular/core';
import { Categories, News } from 'src/app/models/home';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  @Input() categoriesList: Categories | undefined;
  @Input() newsList: News | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
