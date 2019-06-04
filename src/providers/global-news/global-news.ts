import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BrowserTab } from '@ionic-native/browser-tab';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Articles, Sources } from './../../models/models';

import { ApiConfigProvider } from './../api-config/api-config';
import { NewsSourcesProvider } from './../news-sources/news-sources';

@Injectable()
export class GlobalNewsProvider {

  private api_key: string;
  private news_url: string;
  private news_sources_url: string;
  private news_sources: NewsSourcesProvider;

  constructor(public http: HttpClient, public browserTab: BrowserTab, public inAppBrowser: InAppBrowser, public socialSharing: SocialSharing) {
    console.log('Hello GlobalNewsProvider Provider');

    this.news_url = ApiConfigProvider.news_url;
    this.api_key = ApiConfigProvider.news_api_key;
    this.news_sources_url = ApiConfigProvider.news_s_url;
    this.news_sources = new NewsSourcesProvider();
  }

  getNewsSources() {
    let url = this.news_sources_url + '&apiKey=' + this.api_key;
    return this.http.get<Sources>(url);
  }
  
  getMusicNews(): Observable<[Articles, Articles]> {
    let urlOne = this.news_url + 'source=' + this.news_sources.musicNewsSource[0] + '&apiKey=' + this.api_key;
    let urlTwo = this.news_url + 'source=' + this.news_sources.musicNewsSource[1] + '&apiKey=' + this.api_key;

    return Observable.forkJoin(
      this.http.get<Articles>(urlOne),
      this.http.get<Articles>(urlTwo)
    );
  }

  getSportsNews(): Observable<[Articles, Articles, Articles]> {
    let urlOne = this.news_url + 'source=' + this.news_sources.sportsNewsSource[0] + '&apiKey=' + this.api_key;
    let urlTwo = this.news_url + 'source=' + this.news_sources.sportsNewsSource[1] + '&apiKey=' + this.api_key;
    let urlThree = this.news_url + 'source=' + this.news_sources.sportsNewsSource[2] + '&apiKey=' + this.api_key;

    return Observable.forkJoin(
      this.http.get<Articles>(urlOne),
      this.http.get<Articles>(urlTwo),
      this.http.get<Articles>(urlThree)
    );
  }

  getGamingNews(): Observable<[Articles, Articles]> {
    let urlOne = this.news_url + 'source=' + this.news_sources.gamingNewsSource[0] + '&apiKey=' + this.api_key;
    let urlTwo = this.news_url + 'source=' + this.news_sources.gamingNewsSource[1] + '&apiKey=' + this.api_key;

    return Observable.forkJoin(
      this.http.get<Articles>(urlOne),
      this.http.get<Articles>(urlTwo)
    );
  }

  getGeneralNews(): Observable<[Articles, Articles, Articles]> {
    let urlOne = this.news_url + 'source=' + this.news_sources.generalNewsSource[0] + '&apiKey=' + this.api_key;
    let urlTwo = this.news_url + 'source=' + this.news_sources.generalNewsSource[1] + '&apiKey=' + this.api_key;
    let urlThree = this.news_url + 'source=' + this.news_sources.generalNewsSource[2] + '&apiKey=' + this.api_key;

    return Observable.forkJoin(
      this.http.get<Articles>(urlOne),
      this.http.get<Articles>(urlTwo),
      this.http.get<Articles>(urlThree)
    );
  }

  getPoliticsNews(): Observable<[Articles, Articles]> {
    let urlOne = this.news_url + 'source=' + this.news_sources.politicsNewsSource[0] + '&apiKey=' + this.api_key;
    let urlTwo = this.news_url + 'source=' + this.news_sources.politicsNewsSource[1] + '&apiKey=' + this.api_key;

    return Observable.forkJoin(
      this.http.get<Articles>(urlOne),
      this.http.get<Articles>(urlTwo)
    );
  }

  getBusinessNews(): Observable<[Articles, Articles, Articles]> {
    let urlOne = this.news_url + 'source=' + this.news_sources.businessNewsSource[0] + '&apiKey=' + this.api_key;
    let urlTwo = this.news_url + 'source=' + this.news_sources.businessNewsSource[1] + '&apiKey=' + this.api_key;
    let urlThree = this.news_url + 'source=' + this.news_sources.businessNewsSource[2] + '&apiKey=' + this.api_key;

    return Observable.forkJoin(
      this.http.get<Articles>(urlOne),
      this.http.get<Articles>(urlTwo),
      this.http.get<Articles>(urlThree)
    );
  }

  getTechnologyNews(): Observable<[Articles, Articles, Articles, Articles]> {
    let urlOne = this.news_url + 'source=' + this.news_sources.technologyNewsSource[0] + '&apiKey=' + this.api_key;
    let urlTwo = this.news_url + 'source=' + this.news_sources.technologyNewsSource[1] + '&apiKey=' + this.api_key;
    let urlThree = this.news_url + 'source=' + this.news_sources.technologyNewsSource[2] + '&apiKey=' + this.api_key;
    let urlFour = this.news_url + 'source=' + this.news_sources.technologyNewsSource[3] + '&apiKey=' + this.api_key;

    return Observable.forkJoin(
      this.http.get<Articles>(urlOne),
      this.http.get<Articles>(urlTwo),
      this.http.get<Articles>(urlThree),
      this.http.get<Articles>(urlFour)
    );
  }

  getEntertainmentNews(): Observable<[Articles, Articles, Articles]> {
    let urlOne = this.news_url + 'source=' + this.news_sources.entertainmentNewsSource[0] + '&apiKey=' + this.api_key;
    let urlTwo = this.news_url + 'source=' + this.news_sources.entertainmentNewsSource[1] + '&apiKey=' + this.api_key;
    let urlThree = this.news_url + 'source=' + this.news_sources.entertainmentNewsSource[2] + '&apiKey=' + this.api_key;

    return Observable.forkJoin(
      this.http.get<Articles>(urlOne),
      this.http.get<Articles>(urlTwo),
      this.http.get<Articles>(urlThree)
    );
  }

  getScienceNatureNews(): Observable<[Articles, Articles]> {
    let urlOne = this.news_url + 'source=' + this.news_sources.scienceNatureNewsSources[0] + '&apiKey=' + this.api_key;
    let urlTwo = this.news_url + 'source=' + this.news_sources.scienceNatureNewsSources[1] + '&apiKey=' + this.api_key;

    return Observable.forkJoin(
      this.http.get<Articles>(urlOne),
      this.http.get<Articles>(urlTwo)
    );
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
    const now = moment();
    const time = moment(date);

    return now.diff(time, 'days') <= 1 ? time.from(now): 'Some days ago';
  }

  shuffleNewsData(news_data: Array<Articles>) {
    // see reference : https://www.solidfoundationwebdev.com/blog/posts/how-to-shuffle-an-array-in-javascript
    for (var j, x, i = news_data.length; i; j = Math.floor(Math.random() * i), x = news_data[--i], news_data[i] = news_data[j], news_data[j] = x);
    return news_data;
  }

}
