import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Articles } from './../../models/models';

import { BrowserTab } from '@ionic-native/browser-tab';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

import { ApiConfigProvider } from './../api-config/api-config';
import { NewsCustomizationProvider } from '../news-customization/news-customization';

@Injectable()
export class CustomizedNewsProvider {

  private api_key: string;
  private news_url: string;

  constructor(
    public http: HttpClient,
    public browserTab: BrowserTab,
    public inAppBrowser: InAppBrowser,
    public socialSharing: SocialSharing,
    public newsCustomization: NewsCustomizationProvider
  ) {
    console.log('Hello CustomizedNewsProvider Provider');

    this.news_url = ApiConfigProvider.news_url;
    this.api_key = ApiConfigProvider.news_api_key;
  }

  getMyFavoriteNews() {
  }

  getCustomMusicNews() {
    const urls: string[] = [];
    let article: Observable<Articles> = null;
    let articles: Array<Observable<Articles>> = null;
    const sources = this.newsCustomization.getFavoriteMusicNewsSources();

    sources.forEach(source => {
      let url = this.news_url + 'source=' + source + '&apiKey=' + this.api_key;
      urls.push(url);
    });

    urls.forEach(url => {
      article = this.http.get<Articles>(url);
      articles.push(article);
    });

    return Observable.forkJoin(articles);
  }

  getCustomSportsNews() { 
    const urls: string[] = [];
    let article: Observable<Articles> = null;
    let articles: Array<Observable<Articles>> = null;
    const sources = this.newsCustomization.getFavoriteSportsNewsSources();

    sources.forEach(source => {
      let url = this.news_url + 'source=' + source + '&apiKey=' + this.api_key;
      urls.push(url);
    });

    urls.forEach(url => {
      article = this.http.get<Articles>(url);
      articles.push(article);
    });

    return Observable.forkJoin(articles);
  }

  getCustomGamingNews() { 
    const urls: string[] = [];
    let article: Observable<Articles> = null;
    let articles: Array<Observable<Articles>> = null;
    const sources = this.newsCustomization.getFavoriteGamingNewsSources();

    sources.forEach(source => {
      let url = this.news_url + 'source=' + source + '&apiKey=' + this.api_key;
      urls.push(url);
    });

    urls.forEach(url => {
      article = this.http.get<Articles>(url);
      articles.push(article);
    });

    return Observable.forkJoin(articles);
  }

  getCustomGeneralNews() { 
    const urls: string[] = [];
    let article: Observable<Articles> = null;
    let articles: Array<Observable<Articles>> = null;
    const sources = this.newsCustomization.getFavoriteGeneralNewsSources();

    sources.forEach(source => {
      let url = this.news_url + 'source=' + source + '&apiKey=' + this.api_key;
      urls.push(url);
    });

    urls.forEach(url => {
      article = this.http.get<Articles>(url);
      articles.push(article);
    });

    return Observable.forkJoin(articles);
  }

  getCustomPoliticsNews() { 
    const urls: string[] = [];
    let article: Observable<Articles> = null;
    let articles: Array<Observable<Articles>> = null;
    const sources = this.newsCustomization.getFavoritePoliticsNewsSources();

    sources.forEach(source => {
      let url = this.news_url + 'source=' + source + '&apiKey=' + this.api_key;
      urls.push(url);
    });

    urls.forEach(url => {
      article = this.http.get<Articles>(url);
      articles.push(article);
    });

    return Observable.forkJoin(articles);
  }

  getCustomBusinessNews() { 
    const urls: string[] = [];
    let article: Observable<Articles> = null;
    let articles: Array<Observable<Articles>> = null;
    const sources = this.newsCustomization.getFavoriteBusinessNewsSources();

    sources.forEach(source => {
      let url = this.news_url + 'source=' + source + '&apiKey=' + this.api_key;
      urls.push(url);
    });

    urls.forEach(url => {
      article = this.http.get<Articles>(url);
      articles.push(article);
    });

    return Observable.forkJoin(articles);
  }

  getCustomTechnologyNews() { 
    const urls: string[] = [];
    let article: Observable<Articles> = null;
    let articles: Array<Observable<Articles>> = null;
    const sources = this.newsCustomization.getFavoriteTechnologyNewsSources();

    sources.forEach(source => {
      let url = this.news_url + 'source=' + source + '&apiKey=' + this.api_key;
      urls.push(url);
    });

    urls.forEach(url => {
      article = this.http.get<Articles>(url);
      articles.push(article);
    });

    return Observable.forkJoin(articles);
  }

  getCustomEntertainmentNews() { 
    const urls: string[] = [];
    let article: Observable<Articles> = null;
    let articles: Array<Observable<Articles>> = null;
    const sources = this.newsCustomization.getFavoriteEntertainmentNewsSources();

    sources.forEach(source => {
      let url = this.news_url + 'source=' + source + '&apiKey=' + this.api_key;
      urls.push(url);
    });

    urls.forEach(url => {
      article = this.http.get<Articles>(url);
      articles.push(article);
    });

    return Observable.forkJoin(articles);
  }

  getCustomScienceNatureNews() { 
    const urls: string[] = [];
    let article: Observable<Articles> = null;
    let articles: Array<Observable<Articles>> = null;
    const sources = this.newsCustomization.getFavoriteScienceNewsSources();

    sources.forEach(source => {
      let url = this.news_url + 'source=' + source + '&apiKey=' + this.api_key;
      urls.push(url);
    });

    urls.forEach(url => {
      article = this.http.get<Articles>(url);
      articles.push(article);
    });

    return Observable.forkJoin(articles);
  }

  readNews(url: string) {
    this.browserTab.isAvailable().then(
      (isAvailable: boolean) => {
        if (isAvailable)
          this.browserTab.openUrl(url);
        else
          this.inAppBrowser.create(url);
      }
    );
  }

  shareNews(message: string, subject: string, url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.socialSharing.share(message, subject, null, url).then(
        res => { resolve(res); },
        err => { reject(err); }
      );
    });
  }

  parseDate(date: Date) {
    return 'now';
  }

  shuffleNewsData(news_data: Array<Articles>) {
    // see reference : https://www.solidfoundationwebdev.com/blog/posts/how-to-shuffle-an-array-in-javascript
    for (var j, x, i = news_data.length; i; j = Math.floor(Math.random() * i), x = news_data[--i], news_data[i] = news_data[j], news_data[j] = x);
    return news_data;
  }

}
