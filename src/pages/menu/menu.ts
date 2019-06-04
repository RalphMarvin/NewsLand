import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav: Nav;
  selectedPage: any;
  rootPage: any = 'HomePage';
  pages: Array<{ icon: string, title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeSideMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  initializeSideMenu() {
    this.pages = [
      {
        icon: 'ios-home-outline',
        title: 'Home',
        component: 'HomePage'
      },
      /*{
        icon: 'ios-globe-outline',
        title: 'Blog Posts',
        component: 'BlogPage'
      },*/
      {
        icon: 'ios-planet-outline',
        title: 'News Categories',
        component: 'TabsPage'
      },
      /*{
        icon: 'ios-cloudy-outline',
        title: 'Weather',
        component: 'WeatherPage'
      },*/
      {
        icon: 'ios-browsers-outline',
        title: 'Saved Items',
        component: 'LibraryPage'
      },
      {
        icon: 'ios-construct-outline',
        title: 'Customize',
        component: 'CustomizePage'
      },
      {
        icon: 'ios-information-circle-outline',
        title: 'About',
        component: 'AboutPage'
      },
    ];
  }

  openPage(page: any) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario.
    this.nav.setRoot(page.component);
    this.selectedPage = page;
  }

  activateSidemenu(page: any) {
    return page === this.selectedPage;
  }

}
