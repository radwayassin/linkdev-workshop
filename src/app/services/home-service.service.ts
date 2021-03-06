import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categories, HighlightBanner, News, NewsItem, ThingsWeDo } from '../models/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  URL = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getHighlightBannerData(){
   return this.httpClient.get<HighlightBanner>(`${this.URL}/fee177346e7875554413`);
  }

  getThingsWeDo(){
    return this.httpClient.get<ThingsWeDo>(`assets/Json/things_we_do.json`);
  }

  getNewsList(){
    return this.httpClient.get<News>(`${this.URL}/d275425a434e02acf2f7`);
  }

  getNewsItem(id:number){
    return this.httpClient.get<NewsItem>(`${this.URL}/d275425a434e02acf2f7/News/${id}`);
  }

  getNewsCategories(){
    return this.httpClient.get<Categories>(`${this.URL}/91298d970c27e9a06518`);
  }
}
