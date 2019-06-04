import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-blog-categories',
  templateUrl: 'blog-categories.html',
})
export class BlogCategoriesPage {

  categories: Array<{ icon: string, title: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeCategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogCategoriesPage');
  }

  initializeCategories() {
    this.categories = [
      { icon: 'briefcase', title: '3D Graphics' },
      { icon: 'glasses', title: 'Agriculture' },
      { icon: 'game-controller-b', title: 'Air Travel' },
      { icon: 'globe', title: 'Animation' },
      { icon: 'mic', title: 'Architecture' },
      { icon: 'stats', title: 'Arts & History' },
      { icon: 'flask', title: 'Arts * Entertainment' },
      { icon: 'basketball', title: 'Astrology' },
      { icon: 'ios-desktop', title: 'Automotives' },
      { icon: 'briefcase', title: 'Beauty' },
      { icon: 'glasses', title: 'Biology' },
      { icon: 'game-controller-b', title: 'Body Arts' },
      { icon: 'globe', title: 'Body Building' },
      { icon: 'mic', title: 'Books & Literature' },
      { icon: 'stats', title: 'Boxing' },
      { icon: 'flask', title: 'Business' },
      { icon: 'basketball', title: 'Cat' },
      { icon: 'ios-desktop', title: 'Celebrity' },
      { icon: 'briefcase', title: 'Chemistry' },
      { icon: 'glasses', title: 'Clothing' },
      { icon: 'game-controller-b', title: 'Databases' },
      { icon: 'globe', title: 'Dogs' },
      { icon: 'mic', title: 'Drawing/Sketching' },
      { icon: 'stats', title: 'Education' },
      { icon: 'flask', title: 'Entertainment' },
      { icon: 'basketball', title: 'Europe' },
      { icon: 'ios-desktop', title: 'Exercising' },
      { icon: 'briefcase', title: 'Family & Parenting' },
      { icon: 'glasses', title: 'Fashion' },
      { icon: 'game-controller-b', title: 'Food & Drinks' },
      { icon: 'globe', title: 'Football' },
      { icon: 'mic', title: 'Government' },
      { icon: 'stats', title: 'Health & Fitness' },
      { icon: 'flask', title: 'Hotels' },
      { icon: 'basketball', title: 'Human Resources' },
      { icon: 'ios-desktop', title: 'Immigartion' },
      { icon: 'briefcase', title: 'Insurance' },
      { icon: 'glasses', title: 'Internet Technology' },
      { icon: 'game-controller-b', title: 'Javascript' },
      { icon: 'globe', title: 'Movies' },
      { icon: 'mic', title: 'Music' },
      { icon: 'stats', title: 'Nutrition' },
      { icon: 'flask', title: 'Photography' },
      { icon: 'basketball', title: 'Pornography' },
      { icon: 'ios-desktop', title: 'Pregnancy' },
      { icon: 'briefcase', title: 'Real Estate' },
      { icon: 'glasses', title: 'Religion' },
      { icon: 'game-controller-b', title: 'Sci-Fi' },
      { icon: 'globe', title: 'Science' },
      { icon: 'mic', title: 'Society' },
      { icon: 'stats', title: 'Space & Astrology' },
      { icon: 'flask', title: 'Sports' },
      { icon: 'basketball', title: 'Video Games' },
      { icon: 'ios-desktop', title: 'Islam' },
      { icon: 'globe', title: 'Luxury' },
      { icon: 'mic', title: 'Marketing' },
      { icon: 'stats', title: 'Martial Arts' },
      { icon: 'flask', title: 'Mens Health' },
      { icon: 'basketball', title: 'Network Security' },
      { icon: 'ios-desktop', title: 'Stocks' },
      { icon: 'briefcase', title: 'Technology & Computing' },
      { icon: 'glasses', title: 'Tele-Communication' },
      { icon: 'game-controller-b', title: 'Television' },
      { icon: 'globe', title: 'Travel' },
      { icon: 'mic', title: 'Weather' },
      { icon: 'stats', title: 'Weddings' },
      { icon: 'flask', title: 'Womens Health' }
    ];
  }

  open(category: any) {
    this.navCtrl.push('BlogPage');
  }

}
