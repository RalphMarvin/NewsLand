import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { NewsContent, SavedItems } from './../../models/models';

import { BrowserTab } from '@ionic-native/browser-tab';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NewsLibraryProvider } from './../../providers/news-library/news-library';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  segment: string;
  queryText: string;
  isLoading: boolean;
  hasSavedItem: number;
  hasOfflineItem: number;
  savedItems: Array<SavedItems>;
  offlineItems: Array<NewsContent>;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public browserTab: BrowserTab,
    public inAppBrowser: InAppBrowser,
    public socialSharing: SocialSharing,
    public newsLibrary: NewsLibraryProvider
  ) {
    this.initVars();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  initVars() {
    this.savedItems = [];
    this.offlineItems = [];
    this.segment = 'saved';

    this.getAllSavedItems();
  }

  openSearch() {
    this.navCtrl.push('SearchPage');
  }

  segmentViewChanged() {
    this.segment == 'saved'
      ? this.getAllSavedItems()
      : this.getAllOfflineItems();
  }

  searchList() {
    this.segment == 'saved' 
      ? this.searchSavedItems(this.queryText)
      : this.searchOfflineItems(this.queryText);
  }

  showItemDeletedSuccessToast() {
    let toast = this.toastCtrl.create({
      message: '1 item deleted.',
      position: 'bottom',
      duration: 3500
    });

    toast.present();
  }

  showItemDeletedFailureToast() {
    let toast = this.toastCtrl.create({
      message: 'Error occured deleting item! Please try again.',
      position: 'bottom',
      duration: 3500
    });

    toast.present();
  }

  searchSavedItems(query: string) {
    if (query && query.trim() != '') {
      this.savedItems = this.savedItems.filter((item) => {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
    }
    else {
      this.savedItems = [];
      this.getAllSavedItems();
    }
  }

  searchOfflineItems(query: string) {
    if (query && query.trim() != '') {
      this.offlineItems = this.offlineItems.filter((item) => {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
    }
    else {
      this.offlineItems = [];
      this.getAllOfflineItems();
    }
  }

  getAllSavedItems() {
    this.isLoading = true;

    this.newsLibrary.getSavedItems().then(
      results => {
        if (results.rows.length > 0) {
          this.hasSavedItem = 1;

          for (let i = 0; i < results.rows.length; i++) {
            this.savedItems.push(results.rows.item(i));
          }

          this.isLoading = false;
        }
        else {
          this.hasSavedItem = 0;
          this.isLoading = false;
        }
      },
      error => {
        this.savedItems = null;
        this.isLoading = false;
        console.log('An error occured : ' + JSON.stringify(error));
      }
    );
  }

  getAllOfflineItems() {
    this.isLoading = true;

    this.newsLibrary.getOfflineItems().then(
      results => {
        if (results.rows.length > 0) {
          this.hasOfflineItem = 1;

          for (let i = 0; i < results.rows.length; i++) {
            this.offlineItems.push(results.rows.item(i));
          }

          this.isLoading = false;
        }
        else {
          this.hasOfflineItem = 0;
          this.isLoading = false;
        }
      },
      error => {
        this.offlineItems = null;
        this.isLoading = false;
        console.log('An error occured : ' + JSON.stringify(error));
      }
    );
  }

  openNews(url: string) {
    this.browserTab.isAvailable().then(
      (isAvailable: boolean) => {
        if (isAvailable)
          this.browserTab.openUrl(url);
        else
          this.inAppBrowser.create(url);
      }
    );
  }

  deleteOfflineItem(id: number) {
    this.newsLibrary.removeOfflineItem(id).then(
      v => {
        this.showItemDeletedSuccessToast();
        this.offlineItems = [];
        this.getAllOfflineItems();
      },
      e => { this.showItemDeletedFailureToast(); }
    );
  }

  deleteSavedItem(id: number) {
    this.newsLibrary.removeSavedItem(id).then(
      v => {
        this.showItemDeletedSuccessToast();
        this.savedItems = [];
        this.getAllSavedItems();
      },
      e => { this.showItemDeletedFailureToast(); }
    );
  }

  shareItem(item: SavedItems) {
    this.socialSharing.share(item.description, item.title, item.url);
  }

}
