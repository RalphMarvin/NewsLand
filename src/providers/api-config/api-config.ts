import { NEWS_API_KEY, BLOG_API_KEY, WEATHER_API_KEY } from './../../environment/environment';

export class ApiConfigProvider {

  public static news_url = 'https://newsapi.org/v1/articles?';
  public static news_s_url = 'https://newsapi.org/v1/sources?';

  public static blog_url = 'http://webhose.io/filterWebContent?';

  public static weather_url = 'http://api.openweathermao.org/data/2.5/weather?';

  public static news_api_key = NEWS_API_KEY;

  public static blog_api_key = BLOG_API_KEY;

  public static weather_api_key = WEATHER_API_KEY;

  constructor() {
    console.log('Hello ApiConfigProvider Provider');
  }

}
