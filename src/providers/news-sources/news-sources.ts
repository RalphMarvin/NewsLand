import { Injectable } from '@angular/core';

@Injectable()
export class NewsSourcesProvider {

  public musicNewsSource: Array<string>;
  public sportsNewsSource: Array<string>;
  public gamingNewsSource: Array<string>;
  public generalNewsSource: Array<string>;
  public politicsNewsSource: Array<string>;
  public businessNewsSource: Array<string>;
  public technologyNewsSource: Array<string>;
  public entertainmentNewsSource: Array<string>;
  public scienceNatureNewsSources: Array<string>;

  constructor() {
    console.log('Hello NewsSourcesProvider Provider');

    this.musicNewsSource = ['mtv-news', 'mtv-news-uk'];
    this.sportsNewsSource = ['bbc-sport', 'espn', 'fox-sports'];
    this.gamingNewsSource = ['ign', 'polygon'];
    this.generalNewsSource = ['google-news', 'al-jazeera-english', 'bbc-news'];
    this.politicsNewsSource = ['breitbart-news', 'the-economist'];
    this.businessNewsSource = ['bloomberg', 'business-insider', 'cnbc'];
    this.technologyNewsSource = ['ars-technica', 'engadget', 'techcrunch', 'mashable'];
    this.entertainmentNewsSource = ['entertainment-weekly', 'mashable', 'the-lad-bible'];
    this.scienceNatureNewsSources = ['national-geographic', 'new-scientist'];
  }

}
