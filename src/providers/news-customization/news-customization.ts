import { Injectable } from '@angular/core';

@Injectable()
export class NewsCustomizationProvider {

  constructor() {
    console.log('Hello NewsCustomizationProvider Provider');
  }

  setFavoriteMusicNewsSources(sources: string[]) {
    localStorage.setItem('music_news_sources', sources.join());
  }

  setFavoriteSportsNewsSources(sources: string[]) {
    localStorage.setItem('sports_news_sources', sources.join());
  }

  setFavoriteGamingNewsSources(sources: string[]) {
    localStorage.setItem('gaming_news_sources', sources.join());
  }

  setFavoriteScienceNewsSources(sources: string[]) {
    localStorage.setItem('science_news_sources', sources.join());
  }

  setFavoriteGeneralNewsSources(sources: string[]) {
    localStorage.setItem('general_news_sources', sources.join());
  }

  setFavoritePoliticsNewsSources(sources: string[]) {
    localStorage.setItem('politics_news_sources', sources.join());
  }

  setFavoriteBusinessNewsSources(sources: string[]) {
    localStorage.setItem('business_news_sources', sources.join());
  }

  setFavoriteTechnologyNewsSources(sources: string[]) {
    localStorage.setItem('tech_news_sources', sources.join());
  }

  setFavoriteEntertainmentNewsSources(sources: string[]) {
    localStorage.setItem('entertainment_news_sources', sources.join());
  }

  getFavoriteMusicNewsSources(): string[] {
    let sources = localStorage.getItem('music_news_sources');
    return sources == null || sources == '' ? null : sources.split(',');
  }

  getFavoriteSportsNewsSources(): string[] {
    let sources = localStorage.getItem('sports_news_sources');
    return sources == null || sources == '' ? null : sources.split(',');
  }

  getFavoriteGamingNewsSources(): string[] {
    let sources = localStorage.getItem('gaming_news_sources');
    return sources == null || sources == '' ? null : sources.split(',');
  }

  getFavoriteScienceNewsSources(): string[] {
    let sources = localStorage.getItem('science_news_sources');
    return sources == null || sources == '' ? null : sources.split(',');
  }

  getFavoriteGeneralNewsSources(): string[] {
    let sources = localStorage.getItem('general_news_sources');
    return sources == null || sources == '' ? null : sources.split(',');
  }

  getFavoritePoliticsNewsSources(): string[] {
    let sources = localStorage.getItem('politics_news_sources');
    return sources == null || sources == '' ? null : sources.split(',');
  }

  getFavoriteBusinessNewsSources(): string[] {
    let sources = localStorage.getItem('business_news_sources');
    return sources == null || sources == '' ? null : sources.split(',');
  }

  getFavoriteTechnologyNewsSources(): string[] {
    let sources = localStorage.getItem('tech_news_sources');
    return sources == null || sources == '' ? null : sources.split(',');
  }

  getFavoriteEntertainmentNewsSources(): string[] {
    let sources = localStorage.getItem('entertainment_news_sources');
    return sources == null || sources == '' ? null : sources.split(',');
  }

}
