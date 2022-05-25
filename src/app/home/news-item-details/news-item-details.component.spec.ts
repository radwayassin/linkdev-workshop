import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemDetailsComponent } from './news-item-details.component';

describe('NewsItemDetailsComponent', () => {
  let component: NewsItemDetailsComponent;
  let fixture: ComponentFixture<NewsItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
