import { Component, Input, OnInit } from '@angular/core';
import { HighlightBanner } from 'src/app/models/home';

@Component({
  selector: 'app-highlights-banner',
  templateUrl: './highlights-banner.component.html',
  styleUrls: ['./highlights-banner.component.scss']
})
export class HighlightsBannerComponent implements OnInit {
  @Input() highlightBannerList: HighlightBanner | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
