import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController, ToastController } from 'ionic-angular';

import { BlogCategories } from './../../enums/blogs.categories';
import { SettingsProvider } from './../../providers/settings/settings';
import { SettingsValues } from './../../providers/settings/settings-values';
import { ApiConfigProvider } from './../../providers/api-config/api-config';
import { GlobalNewsProvider } from '../../providers/global-news/global-news';
import { LocalCacheProvider } from './../../providers/local-cache/local-cache';
import { LocalStorageProvider } from './../../providers/local-storage/local-storage';
import { NewsCustomizationProvider } from '../../providers/news-customization/news-customization';
import { BlogCustomizationProvider } from '../../providers/blog-customization/blog-customization';

@IonicPage()
@Component({
  selector: 'page-blog-customize',
  templateUrl: 'blog-customize.html',
})
export class BlogCustomizePage {

  dialog: Loading;
  checkedCategory: string;
  selectedCategories: string[];
  categories: Array<{ icon: string, title: string, category: BlogCategories }>;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public blogCustomization: BlogCustomizationProvider
  ) {
    this.initVars();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogCustomizePage');
  }

  initVars() {
    this.checkedCategory = '';
    this.selectedCategories = [];
    this.initializeCategories();
  }

  initializeCategories() {
    this.categories = [
      { icon: 'briefcase', title: '3D Graphics', category: BlogCategories._3DGraphics },
      { icon: 'glasses', title: 'Agriculture', category: BlogCategories.Agriculture },
      { icon: 'game-controller-b', title: 'Air Travel', category: BlogCategories.AirTravel },
      { icon: 'globe', title: 'GAnimation', category: BlogCategories.Animation },
      { icon: 'mic', title: 'Architecture', category: BlogCategories.Architecture },
      { icon: 'stats', title: 'Arts/History', category: BlogCategories.Arts_History },
      { icon: 'flask', title: 'Arts/Entertainment', category: BlogCategories.Arts_Entertainment },
      { icon: 'basketball', title: 'Astrology', category: BlogCategories.Astrology },
      { icon: 'ios-desktop', title: 'Automotives', category: BlogCategories.Automotive },
      { icon: 'briefcase', title: 'Beauty', category: BlogCategories.Beauty },
      { icon: 'glasses', title: 'Biology', category: BlogCategories.Biology },
      { icon: 'game-controller-b', title: 'Body Arts', category: BlogCategories.BodyArt },
      { icon: 'globe', title: 'Body Building', category: BlogCategories.BodyBuilding },
      { icon: 'mic', title: 'Books & Literature', category: BlogCategories.Books_Literature },
      { icon: 'stats', title: 'Boxing', category: BlogCategories.Boxing },
      { icon: 'flask', title: 'Business', category: BlogCategories.Business },
      { icon: 'basketball', title: 'Cat', category: BlogCategories.Cat },
      { icon: 'ios-desktop', title: 'Celebrity', category: BlogCategories.Celebrity },
      { icon: 'briefcase', title: 'Chemistry', category: BlogCategories.Chemistry },
      { icon: 'glasses', title: 'Clothing', category: BlogCategories.Clothing },
      { icon: 'game-controller-b', title: 'Databases', category: BlogCategories.Databases },
      { icon: 'globe', title: 'Dogs', category: BlogCategories.Dogs },
      { icon: 'mic', title: 'Drawing/Sketching', category: BlogCategories.Drawing },
      { icon: 'stats', title: 'Education', category: BlogCategories.Education },
      { icon: 'flask', title: 'Entertainment', category: BlogCategories.Entertainment },
      { icon: 'basketball', title: 'Europe', category: BlogCategories.Europe },
      { icon: 'ios-desktop', title: 'Exercising', category: BlogCategories.Exercise },
      { icon: 'briefcase', title: 'Family & Parenting', category: BlogCategories.Family_Parenting },
      { icon: 'glasses', title: 'Fashion', category: BlogCategories.Fashion },
      { icon: 'game-controller-b', title: 'Food & Drinks', category: BlogCategories.Food_Drinks },
      { icon: 'globe', title: 'Football', category: BlogCategories.Football },
      { icon: 'mic', title: 'Government', category: BlogCategories.Government },
      { icon: 'stats', title: 'Health & Fitness', category: BlogCategories.Health_Fitness },
      { icon: 'flask', title: 'Hotels', category: BlogCategories.Hotels },
      { icon: 'basketball', title: 'Human Resources', category: BlogCategories.Human_Resources },
      { icon: 'ios-desktop', title: 'Immigartion', category: BlogCategories.Immigration },
      { icon: 'briefcase', title: 'Insurance', category: BlogCategories.Inssurance },
      { icon: 'glasses', title: 'Internet Technology', category: BlogCategories.Internet_Technology },
      { icon: 'game-controller-b', title: 'Javascript', category: BlogCategories.Javascript },
      { icon: 'globe', title: 'Movies', category: BlogCategories.Movies },
      { icon: 'mic', title: 'Music', category: BlogCategories.Music },
      { icon: 'stats', title: 'Nutrition', category: BlogCategories.Nutrition },
      { icon: 'flask', title: 'Photography', category: BlogCategories.Photography },
      { icon: 'basketball', title: 'Pornograp[y', category: BlogCategories.Pornography },
      { icon: 'ios-desktop', title: 'Pregnancy', category: BlogCategories.Pregnancy },
      { icon: 'briefcase', title: 'Real Estate', category: BlogCategories.Real_Estate },
      { icon: 'glasses', title: 'Religion', category: BlogCategories.Religion },
      { icon: 'game-controller-b', title: 'Sci-Fi', category: BlogCategories.SciFi },
      { icon: 'globe', title: 'Science', category: BlogCategories.Science },
      { icon: 'mic', title: 'Society', category: BlogCategories.Society },
      { icon: 'stats', title: 'Space & Astrology', category: BlogCategories.Space },
      { icon: 'flask', title: 'Sports', category: BlogCategories.Sports },
      { icon: 'basketball', title: 'Video Games', category: BlogCategories.Video_Games },
      { icon: 'ios-desktop', title: 'Islam', category: BlogCategories.Islam },
      { icon: 'globe', title: 'Luxury', category: BlogCategories.Luxury },
      { icon: 'mic', title: 'Marketing', category: BlogCategories.Marketing },
      { icon: 'stats', title: 'Martial Arts', category: BlogCategories.Martial_Arts },
      { icon: 'flask', title: 'Mens Health', category: BlogCategories.Mens_Health },
      { icon: 'basketball', title: 'Network Security', category: BlogCategories.Network_Security },
      { icon: 'ios-desktop', title: 'Stocks', category: BlogCategories.Stocks },
      { icon: 'briefcase', title: 'Technology & Computing', category: BlogCategories.Tech_Computing },
      { icon: 'glasses', title: 'TeleCommunication', category: BlogCategories.Tele_Communication },
      { icon: 'game-controller-b', title: 'Television', category: BlogCategories.Television },
      { icon: 'globe', title: 'Travel', category: BlogCategories.Travel },
      { icon: 'mic', title: 'Weather', category: BlogCategories.Weather },
      { icon: 'stats', title: 'Weddings', category: BlogCategories.Weddings },
      { icon: 'flask', title: 'Woemns Health', category: BlogCategories.Womens_Health }
    ];
  }

  selectCategory(category: any) {
    this.selectedCategories.push(category.toString());
  }

  saveCategories() {
    this.blogCustomization.setFavoriteCategories(this.selectedCategories);
  }

  save() {
    this.saveCategories();
    this.navCtrl.setRoot('MenuPage');
  }

}
