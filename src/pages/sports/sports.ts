import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Refresher } from 'ionic-angular';

import { SavedItems, NewsContent } from './../../models/models';

import { LocalNewsProvider } from './../../providers/local-news/local-news';
import { GlobalNewsProvider } from './../../providers/global-news/global-news';
import { NewsCachingProvider } from './../../providers/news-caching/news-caching';
import { NewsLibraryProvider } from './../../providers/news-library/news-library';
import { ConnectivityProvider } from './../../providers/connectivity/connectivity';
import { CustomizedNewsProvider } from '../../providers/customized-news/customized-news';
import { NewsCustomizationProvider } from '../../providers/news-customization/news-customization';

@IonicPage()
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {

  hasCache: boolean;
  isLoading: boolean;
  isConnected: boolean;
  localNewsResults: Array<NewsContent>;
  globalNewsResults: Array<NewsContent>;
  private sportsNewsSources: string[];

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public localNews: LocalNewsProvider,
    public globalNews: GlobalNewsProvider,
    public newsCaching: NewsCachingProvider,
    public newsLibrary: NewsLibraryProvider,
    public connectivity: ConnectivityProvider,
    public customizedNews: CustomizedNewsProvider,
    public newsCustomization: NewsCustomizationProvider
  ) {
    this.initVars();
    this.initializeSportsNewsSources();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsPage');
  }

  initVars() {
    this.hasCache = false;
    this.localNewsResults = [];
    this.globalNewsResults = [];
    this.isConnected = this.connectivity.isOnline() ? true : false;

    this.getNews();
  }

  initializeSportsNewsSources() {
    this.sportsNewsSources = this.newsCustomization.getFavoriteSportsNewsSources();
  }

  showIsOfflineToast() {
    let toast = this.toastCtrl.create({
      message: 'Oooops! Connection has been lost.',
      position: 'bottom',
      duration: 4000
    });

    toast.present();
  }

  showSavedForLaterToast() {
    let toast = this.toastCtrl.create({
      message: '1 Article Saved.',
      position: 'bottom',
      duration: 3500
    });

    toast.present();
  }

  showSaveItemForLaterErrorToast() {
    let toast = this.toastCtrl.create({
      message: 'Failed to save article. Please try again!',
      position: 'bottom',
      duration: 3500
    });

    toast.present();
  }

  showSavedItemsExistsToast() {
    let toast = this.toastCtrl.create({
      message: 'Article already exists.',
      position: 'bottom',
      duration: 3500
    });

    toast.present();
  }

  showErrorGettingNewsAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error Occured',
      message: 'Ooops! An error occured while loading news. Please try again!',
      buttons: ['Ok']
    });

    alert.present();
  }

  savedItemForLater(news: NewsContent) {
    let item = new SavedItems(news.title, news.description, news.url, news.image, news.publishedAt);
    this.newsLibrary.saveForLater(item).then(
      v => {
        this.showSavedForLaterToast();
      },
      e => {
        e.code == 6
          ? this.showSavedItemsExistsToast()
          : this.showSaveItemForLaterErrorToast();
      }
    );
  }

  shareItem(news: NewsContent) {
    this.globalNews.shareNews(news.description, news.title, news.url);
  }

  doRefresh(refresh: Refresher) {
    this.connectivity.isOnline() ? this.getNews() : this.showIsOfflineToast();
    refresh.complete();
  }

  getNews() {
    this.sportsNewsSources == null || this.sportsNewsSources == undefined
      ? this.getDefaultNews()
      : this.getCustomizedNews();
  }

  getDefaultNews() {
    if (!this.isConnected) {
      this.getCachedNews();
      this.showIsOfflineToast();
    }
    else {
      this.isLoading = true;

      this.globalNews.getSportsNews().subscribe(
        newsResults => {
          this.globalNews.shuffleNewsData(newsResults);

          newsResults.forEach(elem => {
            elem.articles.forEach(element => {
              let news = new NewsContent(
                element.title,
                elem.source,
                element.urlToImage,
                element.url,
                element.description,
                this.globalNews.parseDate(element.publishedAt)
              );

              this.globalNewsResults.push(news);
              this.cacheNewsData(news);
            });
          });

          console.log('Results : ' + JSON.stringify(newsResults));
          this.isLoading = false;
        },
        error => {
          if (error.response == '' || error.response == null) {
            this.isConnected = false;
            this.isLoading = false;
          }
          else {
            this.isLoading = false;
            this.showErrorGettingNewsAlert();
            console.log('Error : ' + JSON.stringify(error));
          }
        }
      );
    }
  }

  getCustomizedNews() {
    if (!this.isConnected) {
      this.getCachedNews();
      this.showIsOfflineToast();
    }
    else {
      this.isLoading = true;
      this.customizedNews.getCustomSportsNews().subscribe(
        newsResults => {
          newsResults = this.customizedNews.shuffleNewsData(newsResults);
          newsResults.forEach(elem => {
            elem.articles.forEach(element => {
              let news = new NewsContent(
                element.title,
                elem.source,
                element.urlToImage,
                element.url,
                element.description,
                this.customizedNews.parseDate(element.publishedAt)
              );

              this.globalNewsResults.push(news);
              this.cacheNewsData(news);
            });
          });

          console.log('Results : ' + JSON.stringify(newsResults));
          this.isLoading = false;
        },
        error => {
          if (error.response == '' || error.response == null) {
            this.isConnected = false;
            this.isLoading = false;
          }
          else {
            this.isLoading = false;
            this.showErrorGettingNewsAlert();
            console.log('Error : ' + JSON.stringify(error));
          }
        }
      );
    }
  }

  getCachedNews() {
    this.isLoading = true;
    this.isConnected = true;

    this.newsCaching.getSportsNewsCache().then(
      newsData => {
        if (newsData == null || newsData == []) {
          this.hasCache = false;
        }
        else {
          this.hasCache = true;
          newsData.forEach(element => {
            this.globalNewsResults.push(element);
          });
        }

        this.isLoading = false;
      },
      error => {
        this.hasCache = false;
        this.isLoading = false;
        console.log(JSON.stringify(error));
      }
    );
  }

  cacheNewsData(news: NewsContent) {
    this.newsCaching.cacheSportsNews(news);
  }

  readNews(url: string) {
    this.globalNews.readNews(url);
  }

}
