import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController, ToastController } from 'ionic-angular';

import { NewsCategories } from '../../enums/news-categories';
import { SettingsProvider } from './../../providers/settings/settings';
import { SettingsValues } from './../../providers/settings/settings-values';
import { ApiConfigProvider } from './../../providers/api-config/api-config';
import { GlobalNewsProvider } from '../../providers/global-news/global-news';
import { LocalCacheProvider } from './../../providers/local-cache/local-cache';
import { LocalStorageProvider } from './../../providers/local-storage/local-storage';
import { NewsCustomizationProvider } from '../../providers/news-customization/news-customization';

@IonicPage()
@Component({
  selector: 'page-customize',
  templateUrl: 'customize.html',
})
export class CustomizePage {

  dialog: Loading;
  checkedCategory: string;
  sources: Array<{ name: string, id: string, category: string }>;
  newsSources: Array<{ label: string, type: string, value: string }>;
  categories: Array<{ icon: string, title: string, category: NewsCategories }>;

  constructor( 
    public navParams: NavParams,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public settingsProvider: SettingsProvider,
    public localCacheProvider: LocalCacheProvider,
    public globalNewsProvider: GlobalNewsProvider,
    public localStorageProvider: LocalStorageProvider,
    public newsCustomization: NewsCustomizationProvider
  ) {
    this.initVars();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomizePage');
    this.getAllNewsSources();
  }

  initVars() {
    this.sources = [];
    this.newsSources = [];
    this.checkedCategory = '';
    this.initializeCategories();
  }

  initializeCategories() {
    this.categories = [
      { icon: 'briefcase', title: 'Business News', category: NewsCategories.BusinessNews },
      { icon: 'glasses', title: 'Entertainment News', category: NewsCategories.EntertainmentNews },
      { icon: 'game-controller-b', title: 'Gaming News', category: NewsCategories.GamingNews },
      { icon: 'globe', title: 'General News', category: NewsCategories.GeneralNews },
      { icon: 'mic', title: 'Music News', category: NewsCategories.MusicNews },
      { icon: 'stats', title: 'Politics News', category: NewsCategories.PoliticsNews },
      { icon: 'flask', title: 'Science News', category: NewsCategories.ScienceNews },
      { icon: 'basketball', title: 'Sports News', category: NewsCategories.SportsNews },
      { icon: 'ios-desktop', title: 'Technology News', category: NewsCategories.TechnologyNews }
    ];
  }

  initializeApp() {
    if (this.settingsProvider.app_initialized != SettingsValues.AppInitializedOption.Yes) {
      this.localCacheProvider.initApplicationLocalCache();
      this.localStorageProvider.initApplicationLocalStorage();
      this.settingsProvider.app_initialized = SettingsValues.AppInitializedOption.Yes
    }
  }

  showLoadingDialog() {
    this.dialog = this.loadingCtrl.create({
      content: 'Please wait ...',
      showBackdrop: true
    });

    this.dialog.present();
  }

  hideLoadingDialog() {
    this.dialog.dismiss();
  }

  getAllNewsSources() {
    this.showLoadingDialog();

    this.globalNewsProvider.getNewsSources().subscribe(
      src => {
        console.log(JSON.stringify(src));
        src.sources.forEach(element => {
          this.sources.push({ id: element.id, name: element.name, category: element.category });
        });

        this.hideLoadingDialog();
      },
      err => {
        console.log('Error : ' + JSON.stringify(err));
        this.hideLoadingDialog();
      }
    );
  }

  selectCategory(category: any) {
    switch (category) {
      case NewsCategories.MusicNews:
        this.showMusicNewsSourcesDialog();
        break;
      case NewsCategories.SportsNews:
        this.showSportsNewsSourcesDialog();
        break;
      case NewsCategories.GamingNews:
        this.showGamingNewsSourcesDialog();
        break;
      case NewsCategories.ScienceNews:
        this.showScienceNewsSourcesDialog();
        break;
      case NewsCategories.GeneralNews:
        this.showGeneralNewsSourcesDialog();
        break;
      case NewsCategories.PoliticsNews:
        this.showPoliticsNewsSourcesDialog();
        break;
      case NewsCategories.BusinessNews:
        this.showBusinessNewsSourcesDialog();
        break;
      case NewsCategories.TechnologyNews:
        this.showTechnologyNewsSourcesDialog();
        break;
      case NewsCategories.EntertainmentNews:
        this.showEntertainmentNewsSourcesDialog();
        break;
      default:
        break;
    }
  }

  showMusicNewsSourcesDialog() {
    let dialog = this.alertCtrl.create();
    dialog.setTitle('Select Music News Sources');

    let musicSources = this.sources.filter((s) => s.category == 'music');
    musicSources.forEach(element => {
      this.newsSources.push({ label: element.name, value: element.id, type: 'checkbox' });
    });

    this.newsSources.forEach(element => {
      dialog.addInput({
        label: element.label,
        type: element.type,
        value: element.value
      });
    });

    dialog.addButton('Close');
    dialog.addButton({
      text: 'OK - Done',
      handler: data => {
        this.checkedCategory = NewsCategories.MusicNews;
        this.newsCustomization.setFavoriteMusicNewsSources(data);
      }
    });

    dialog.present();
  }

  showSportsNewsSourcesDialog() { 
    let dialog = this.alertCtrl.create();
    dialog.setTitle('Select Sports News Sources');

    let sportsSources = this.sources.filter((s) => s.category == 'sports');
    sportsSources.forEach(element => {
      this.newsSources.push({ label: element.name, value: element.id, type: 'checkbox' });
    });

    this.newsSources.forEach(element => {
      dialog.addInput({
        label: element.label,
        type: element.type,
        value: element.value
      });
    });

    dialog.addButton('Close');
    dialog.addButton({
      text: 'OK - Done',
      handler: data => {
        this.checkedCategory = NewsCategories.SportsNews;
        this.newsCustomization.setFavoriteSportsNewsSources(data);
      }
    });

    dialog.present();
  }

  showGamingNewsSourcesDialog() { 
    let dialog = this.alertCtrl.create();
    dialog.setTitle('Select Gaming News Sources');

    let gamingSources = this.sources.filter((s) => s.category == 'gaming');
    gamingSources.forEach(element => {
      this.newsSources.push({ label: element.name, value: element.id, type: 'checkbox' });
    });

    this.newsSources.forEach(element => {
      dialog.addInput({
        label: element.label,
        type: element.type,
        value: element.value
      });
    });

    dialog.addButton('Close');
    dialog.addButton({
      text: 'OK - Done',
      handler: data => {
        this.checkedCategory = NewsCategories.GamingNews;
        this.newsCustomization.setFavoriteBusinessNewsSources(data);
      }
    });

    dialog.present();
  }

  showScienceNewsSourcesDialog() { 
    let dialog = this.alertCtrl.create();
    dialog.setTitle('Select Science News Sources');

    let scienceSources = this.sources.filter((s) => s.category == 'science-nature');
    scienceSources.forEach(element => {
      this.newsSources.push({ label: element.name, value: element.id, type: 'checkbox' });
    });

    this.newsSources.forEach(element => {
      dialog.addInput({
        label: element.label,
        type: element.type,
        value: element.value
      });
    });

    dialog.addButton('Close');
    dialog.addButton({
      text: 'OK - Done',
      handler: data => {
        this.checkedCategory = NewsCategories.ScienceNews;
        this.newsCustomization.setFavoriteScienceNewsSources(data);
      }
    });

    dialog.present();
  }

  showGeneralNewsSourcesDialog() { 
    let dialog = this.alertCtrl.create();
    dialog.setTitle('Select General News Sources');

    let generalSources = this.sources.filter((s) => s.category == 'general');
    generalSources.forEach(element => {
      this.newsSources.push({ label: element.name, value: element.id, type: 'checkbox' });
    });

    this.newsSources.forEach(element => {
      dialog.addInput({
        label: element.label,
        type: element.type,
        value: element.value
      });
    });

    dialog.addButton('Close');
    dialog.addButton({
      text: 'OK - Done',
      handler: data => {
        this.checkedCategory = NewsCategories.GeneralNews;
        this.newsCustomization.setFavoriteGeneralNewsSources(data);
      }
    });

    dialog.present();
  }

  showPoliticsNewsSourcesDialog() {
    let dialog = this.alertCtrl.create();
    dialog.setTitle('Select Politics News Sources');

    let politicsSources = this.sources.filter((s) => s.category == 'politics');
    politicsSources.forEach(element => {
      this.newsSources.push({ label: element.name, value: element.id, type: 'checkbox' });
    });

    this.newsSources.forEach(element => {
      dialog.addInput({
        label: element.label,
        type: element.type,
        value: element.value
      });
    });

    dialog.addButton('Close');
    dialog.addButton({
      text: 'OK - Done',
      handler: data => {
        this.checkedCategory = NewsCategories.PoliticsNews;
        this.newsCustomization.setFavoritePoliticsNewsSources(data);
      }
    });

    dialog.present();
  }

  showBusinessNewsSourcesDialog() {
    let dialog = this.alertCtrl.create();
    dialog.setTitle('Select Business News Sources');

    let businessSources = this.sources.filter((s) => s.category == 'business');
    businessSources.forEach(element => {
      this.newsSources.push({ label: element.name, value: element.id, type: 'checkbox' });
    });

    this.newsSources.forEach(element => {
      dialog.addInput({
        label: element.label,
        type: element.type,
        value: element.value
      });
    });

    dialog.addButton('Close');
    dialog.addButton({
      text: 'OK - Done',
      handler: data => { 
        this.checkedCategory = NewsCategories.BusinessNews;
        this.newsCustomization.setFavoriteBusinessNewsSources(data);
      }
    });

    dialog.present();
  }

  showTechnologyNewsSourcesDialog() {
    let dialog = this.alertCtrl.create();
    dialog.setTitle('Select Technology News Sources');

    let technologySources = this.sources.filter((s) => s.category == 'technology');
    technologySources.forEach(element => {
      this.newsSources.push({ label: element.name, value: element.id, type: 'checkbox' });
    });

    this.newsSources.forEach(element => {
      dialog.addInput({
        label: element.label,
        type: element.type,
        value: element.value
      });
    });

    dialog.addButton('Close');
    dialog.addButton({
      text: 'OK - Done',
      handler: data => {
        this.checkedCategory = NewsCategories.TechnologyNews;
        this.newsCustomization.setFavoriteTechnologyNewsSources(data);
      }
    });

    dialog.present();
  }

  showEntertainmentNewsSourcesDialog() {
    let dialog = this.alertCtrl.create();
    dialog.setTitle('Select Entertainment News Sources');

    let entertainmentSources = this.sources.filter((s) => s.category == 'entertainment');
    entertainmentSources.forEach(element => {
      this.newsSources.push({ label: element.name, value: element.id, type: 'checkbox' });
    });

    this.newsSources.forEach(element => {
      dialog.addInput({
        label: element.label,
        type: element.type,
        value: element.value
      });
    });

    dialog.addButton('Close');
    dialog.addButton({
      text: 'OK - Done',
      handler: data => {
        this.checkedCategory = NewsCategories.EntertainmentNews;
        this.newsCustomization.setFavoriteEntertainmentNewsSources(data);
      }
    });

    dialog.present();
  }

  saveCustomization() {
    this.initializeApp();
    this.navCtrl.setRoot('MenuPage');
  }

}
