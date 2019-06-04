import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  categories: Array<{ icon: string, title: string, description: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeCategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  open(page: any) {
    this.navCtrl.push(page.component);
  }

  initializeCategories() {
    this.categories = [
      {
        icon: 'briefcase',
        title: 'Business',
        description: 'All your business news, bankng, finance, stocks, news business, investors and many more news available here.',
        component: 'BusinessPage'
      },
      {
        icon: 'glasses',
        title: 'Entertainment',
        description: 'All your entertainment news right here. Get all the news you can about the celebrities worldwide from all kinds of industries.',
        component: 'EntertainmentPage'
      },
      {
        icon: 'game-controller-b',
        title: 'Gaming',
        description: 'All the latest gist about the latest games, gaming devices, upcoming games etc. All this from the top 3 gaming new sources.',
        component: 'GamingPage'
      },
      {
        icon: 'globe',
        title: 'General',
        description: 'Find out all what is happening around the globe, from new technologies, political campaigns sports news, market shares etc.',
        component: 'GeneralPage'
      },
      {
        icon: 'mic',
        title: 'Music',
        description: 'Gets all the information you need about the music industries worldwide and artists worldwide. News on what your celebrities are up to.',
        component: 'MusicPage'
      },
      {
        icon: 'stats',
        title: 'Politics',
        description: 'All the political news and events worldwide is available for free here. All the news on presidential campaigns etc.',
        component: 'PoliticsPage'
      },
      {
        icon: 'flask',
        title: 'Science',
        description: 'News on Global warming, climate changes, biology, medicine, diet etc are all available here., daily topics.',
        component: 'SciencePage'
      },
      {
        icon: 'basketball',
        title: 'Sports',
        description: 'Get all your sports news, news about your favorite teams, news about leagues and also about mangers, players and fans.',
        component: 'SportsPage'
      },
      {
        icon: 'ios-desktop',
        title: 'Technology',
        description: 'All the juicy technological news are available here. Find out about the latest technologies used worldwide and more on tech already in use.',
        component: 'TechnologyPage'
      }
    ];
  }

}
