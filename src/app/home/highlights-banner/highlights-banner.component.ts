import { Slide } from './../../models/home';
import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationEvent } from "@angular/animations";
@Component({
  selector: 'app-highlights-banner',
  templateUrl: './highlights-banner.component.html',
  styleUrls: ['./highlights-banner.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('hide', style({ transform: 'rotate(0)' })),
      state('show', style({ transform: 'rotate(-360deg)' })),
      transition('* <=> *', animate('6000ms ease-in-out'))
    ])
  ]
})
export class HighlightsBannerComponent implements OnInit {
  @Input() highlightBannerList: Slide[] = [];
  state: string = 'show';
  times: number = 1;
  counter: number = 0;
  bannerIndex: number = 0;
  bannerImages: string[] = [
    'assets/images/slide1.png',
    'assets/images/slide3.png',
    'assets/images/slide2.png'
  ]
  animatedImages: string[] = [
    'assets/images/orange.svg',
    'assets/images/pink.svg',
    'assets/images/green.svg',
  ]
  imgLines: string[] = [
    'assets/images/orangeLine.png',
    'assets/images/pinkLine.png',
    'assets/images/greenLine.png',
  ]
  indicators: number[] = [3, 2, 1];
  selectedIndex: number = 2;
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  rotate() {
    this.state = (this.state === 'hide' ? 'show' : 'hide');
  }
  onDone(event: AnimationEvent) {
    if (this.counter < this.times) {
      this.state = (this.state === 'hide' ? 'show' : 'hide');
      this.counter++;
      this.changeDetectorRef.detectChanges();
    }
  }
  selectOrder(bannerIndex: number) {
    let index: number = 0;
    this.highlightBannerList.some((highlightBanner, i) => {
      if (highlightBanner.order == bannerIndex) { index = i }
    });
    this.bannerIndex = index;
  }
}
