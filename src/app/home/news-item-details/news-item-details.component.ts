import { NewsItem } from './../../models/home';
import { HomeService } from './../../services/home-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-item-details',
  templateUrl: './news-item-details.component.html',
  styleUrls: ['./news-item-details.component.scss']
})
export class NewsItemDetailsComponent implements OnInit {
  newsItemId!: number;
  newsDetails = {} as NewsItem
  constructor(private activatedRoute: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.newsItemId = +param.get('id')!;
      this.getNewsItemDetails(this.newsItemId);
    })
  }

  getNewsItemDetails(id: number) {
    this.homeService.getNewsItem(id).subscribe((res) => {
      this.newsDetails = res
    })
  }
}
