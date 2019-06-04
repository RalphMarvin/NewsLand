import { Injectable } from '@angular/core';
import { LocalCacheProvider } from './../local-cache/local-cache';

import { NewsContent } from './../../models/models';

@Injectable()
export class NewsCachingProvider {

  constructor(public localCache: LocalCacheProvider) {
    console.log('Hello NewsCachingProvider Provider');
  }

  cacheMusicNews(cacheData: NewsContent): Promise<any> {
    return new Promise((resolve, reject) => {
      this.localCache.saveItem('music', cacheData).then(
        v => { resolve(v); },
        e => { reject(e); }
      );
    });
  }

  getMusicNewsCache(): Promise<NewsContent[]> {
    return new Promise((resolve, reject) => {
      this.localCache.getItem('music').then(
        (sqlResult) => {
          let newsResults: Array<NewsContent> = [];

          if (sqlResult.rows.length > 0) {
            for (let i = 0; i < sqlResult.rows.length; i++) {
              let news = new NewsContent(
                sqlResult.rows.item(i).title, 
                sqlResult.rows.item(i).source, 
                sqlResult.rows.item(i).image, 
                sqlResult.rows.item(i).url, 
                sqlResult.rows.item(i).description, 
                sqlResult.rows.item(i).publishedAt
              );
              newsResults.push(news);
            }

            return resolve(newsResults);
          }
          else {
            return resolve(newsResults);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    });
  }

  cacheSportsNews(cacheData: NewsContent): Promise<any> {
    return new Promise((resolve, reject) => {
      this.localCache.saveItem('sports', cacheData).then(
        v => { resolve(v); },
        e => { reject(e); }
      );
    });
  }

  getSportsNewsCache(): Promise<NewsContent[]> {
    return new Promise((resolve, reject) => {
      this.localCache.getItem('sports').then(
        (sqlResult) => {
          let newsResults: Array<NewsContent> = [];

          if (sqlResult.rows.length > 0) {
            for (let i = 0; i < sqlResult.rows.length; i++) {
              let news = new NewsContent(
                sqlResult.rows.item(i).title, 
                sqlResult.rows.item(i).source, 
                sqlResult.rows.item(i).image, 
                sqlResult.rows.item(i).url, 
                sqlResult.rows.item(i).description, 
                sqlResult.rows.item(i).publishedAt
              );
              newsResults.push(news);
            }

            return resolve(newsResults);
          }
          else {
            return resolve(newsResults);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    });
  }

  cacheScienceNews(cacheData: NewsContent) {
    return new Promise((resolve, reject) => {
      this.localCache.saveItem('science', cacheData).then(
        v => { resolve(v); },
        e => { reject(e); }
      );
    });
  }

  getScienceNewsCache(): Promise<NewsContent[]> {
    return new Promise((resolve, reject) => {
      this.localCache.getItem('science').then(
        (sqlResult) => {
          let newsResults: Array<NewsContent> = [];

          if (sqlResult.rows.length > 0) {
            for (let i = 0; i < sqlResult.rows.length; i++) {
              let news = new NewsContent(
                sqlResult.rows.item(i).title, 
                sqlResult.rows.item(i).source, 
                sqlResult.rows.item(i).image, 
                sqlResult.rows.item(i).url, 
                sqlResult.rows.item(i).description, 
                sqlResult.rows.item(i).publishedAt
              );
              newsResults.push(news);
            }

            return resolve(newsResults);
          }
          else {
            return resolve(newsResults);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    });
  }

  cacheFavoriteNews(cacheData: NewsContent): Promise<any> {
    return new Promise((resolve, reject) => {
      this.localCache.saveItem('favorite', cacheData).then(
        v => { resolve(v); },
        e => { reject(e); }
      );
    });
  }

  getFavoriteNewscache(): Promise<NewsContent[]> {
    return new Promise((resolve, reject) => {
      this.localCache.getItem('favorite').then(
        (sqlResult) => {
          let newsResults: Array<NewsContent> = [];

          if (sqlResult.rows.length > 0) {
            for (let i = 0; i < sqlResult.rows.length; i++) {
              let news = new NewsContent(
                sqlResult.rows.item(i).title, 
                sqlResult.rows.item(i).source, 
                sqlResult.rows.item(i).image, 
                sqlResult.rows.item(i).url, 
                sqlResult.rows.item(i).description, 
                sqlResult.rows.item(i).publishedAt
              );
              newsResults.push(news);
            }

            return resolve(newsResults);
          }
          else {
            return resolve(null);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    });
  }

  cacheBusinessNews(cacheData: NewsContent): Promise<any> {
    return new Promise((resolve, reject) => {
      this.localCache.saveItem('business', cacheData).then(
        v => { resolve(v); },
        e => { reject(e); }
      );
    });
  }

  getBusinessNewsCache(): Promise<NewsContent[]> {
    return new Promise((resolve, reject) => {
      this.localCache.getItem('business').then(
        (sqlResult) => {
          let newsResults: Array<NewsContent> = [];

          if (sqlResult.rows.length > 0) {
            for (let i = 0; i < sqlResult.rows.length; i++) {
              let news = new NewsContent(
                sqlResult.rows.item(i).title, 
                sqlResult.rows.item(i).source, 
                sqlResult.rows.item(i).image, 
                sqlResult.rows.item(i).url, 
                sqlResult.rows.item(i).description, 
                sqlResult.rows.item(i).publishedAt
              );
              newsResults.push(news);
            }

            return resolve(newsResults);
          }
          else {
            return resolve(newsResults);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    });
  }

  cacheGeneralNews(cacheData: NewsContent) {
    return new Promise((resolve, reject) => {
      this.localCache.saveItem('general', cacheData).then(
        v => { resolve(v); },
        e => { reject(e); }
      );
    });
  }

  getGeneralNewsCache(): Promise<NewsContent[]> {
    return new Promise((resolve, reject) => {
      this.localCache.getItem('general').then(
        (sqlResult) => {
          let newsResults: Array<NewsContent> = [];

          if (sqlResult.rows.length > 0) {
            for (let i = 0; i < sqlResult.rows.length; i++) {
              let news = new NewsContent(
                sqlResult.rows.item(i).title, 
                sqlResult.rows.item(i).source, 
                sqlResult.rows.item(i).image, 
                sqlResult.rows.item(i).url, 
                sqlResult.rows.item(i).description, 
                sqlResult.rows.item(i).publishedAt
              );
              newsResults.push(news);
            }

            return resolve(newsResults);
          }
          else {
            return resolve(newsResults);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    });
  }

  cachePoliticalNews(cacheData: NewsContent): Promise<any> {
    return new Promise((resolve, reject) => {
      this.localCache.saveItem('politics', cacheData).then(
        v => { resolve(v); },
        e => { reject(e); }
      );
    });
  }

  getPoliticalNewsCache(): Promise<NewsContent[]> {
    return new Promise((resolve, reject) => {
      this.localCache.getItem('politics').then(
        (sqlResult) => {
          let newsResults: Array<NewsContent> = [];

          if (sqlResult.rows.length > 0) {
            for (let i = 0; i < sqlResult.rows.length; i++) {
              let news = new NewsContent(
                sqlResult.rows.item(i).title, 
                sqlResult.rows.item(i).source, 
                sqlResult.rows.item(i).image, 
                sqlResult.rows.item(i).url, 
                sqlResult.rows.item(i).description, 
                sqlResult.rows.item(i).publishedAt
              );
              newsResults.push(news);
            }

            return resolve(newsResults);
          }
          else {
            return resolve(newsResults);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    });
  }

  cacheGamingNews(cacheData: NewsContent) {
    return new Promise((resolve, reject) => {
      this.localCache.saveItem('gaming', cacheData).then(
        v => { resolve(v); },
        e => { reject(e); }
      );
    });
  }

  getGamingNewsCache(): Promise<NewsContent[]> {
    return new Promise((resolve, reject) => {
      this.localCache.getItem('gaming').then(
        (sqlResult) => {
          let newsResults: Array<NewsContent> = [];

          if (sqlResult.rows.length > 0) {
            for (let i = 0; i < sqlResult.rows.length; i++) {
              let news = new NewsContent(
                sqlResult.rows.item(i).title, 
                sqlResult.rows.item(i).source, 
                sqlResult.rows.item(i).image, 
                sqlResult.rows.item(i).url, 
                sqlResult.rows.item(i).description, 
                sqlResult.rows.item(i).publishedAt
              );
              newsResults.push(news);
            }

            return resolve(newsResults);
          }
          else {
            return resolve(newsResults);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    });
  }

  cacheTechnologyNews(cacheData: NewsContent): Promise<any> {
    return new Promise((resolve, reject) => {
      this.localCache.saveItem('technology', cacheData).then(
        v => { resolve(v); },
        e => { reject(e); }
      );
    });
  }

  getTechnologyNewsCache(): Promise<NewsContent[]> {
    return new Promise((resolve, reject) => {
      this.localCache.getItem('technology').then(
        (sqlResult) => {
          let newsResults: Array<NewsContent> = [];

          if (sqlResult.rows.length > 0) {
            for (let i = 0; i < sqlResult.rows.length; i++) {
              let news = new NewsContent(
                sqlResult.rows.item(i).title, 
                sqlResult.rows.item(i).source, 
                sqlResult.rows.item(i).image, 
                sqlResult.rows.item(i).url, 
                sqlResult.rows.item(i).description, 
                sqlResult.rows.item(i).publishedAt
              );
              newsResults.push(news);
            }

            return resolve(newsResults);
          }
          else {
            return resolve(newsResults);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    });
  }

  cacheEntertainmentNews(cacheData: NewsContent) {
    return new Promise((resolve, reject) => {
      this.localCache.saveItem('entertainment', cacheData).then(
        v => { resolve(v); },
        e => { reject(e); }
      );
    });
  }

  getEntertainmentNewsCache(): Promise<NewsContent[]> {
    return new Promise((resolve, reject) => {
      this.localCache.getItem('entertainment').then(
        (sqlResult) => {
          let newsResults: Array<NewsContent> = [];

          if (sqlResult.rows.length > 0) {
            for (let i = 0; i < sqlResult.rows.length; i++) {
              let news = new NewsContent(
                sqlResult.rows.item(i).title, 
                sqlResult.rows.item(i).source, 
                sqlResult.rows.item(i).image, 
                sqlResult.rows.item(i).url, 
                sqlResult.rows.item(i).description, 
                sqlResult.rows.item(i).publishedAt
              );
              newsResults.push(news);
            }

            return resolve(newsResults);
          }
          else {
            return resolve(newsResults);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    });
  }

}
