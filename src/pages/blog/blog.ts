import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Refresher } from 'ionic-angular';

import { Posts, BlogContent } from './../../models/models';
import { BlogCategories } from '../../enums/blogs.categories';

import { BlogPostsProvider } from './../../providers/blog-posts/blog-posts';
import { ConnectivityProvider } from './../../providers/connectivity/connectivity';

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {

  isLoading: boolean;
  isConnected: boolean;
  category: BlogCategories;
  blogPostResults: Array<BlogContent>;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public connectivity: ConnectivityProvider,
    public blogPostsProvider: BlogPostsProvider
  ) {
    this.initVars();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

  initVars() {
    this.blogPostResults = [];
    this.category = this.navParams.get('category');
    this.isConnected = this.connectivity.isOnline() ? true : false;

    this.getPost();
  }

  showIsOfflineToast() {
    let toast = this.toastCtrl.create({
      message: 'Oooops! Connection has been lost.',
      position: 'bottom',
      duration: 4000
    });

    toast.present();
  }

  shareItem(blog: BlogContent) {
    this.blogPostsProvider.sharePost(blog.title, blog.text, blog.url);
  }

  doRefresh(refresh: Refresher) {
    this.connectivity.isOnline() ? this.getPost() : this.showIsOfflineToast();
    refresh.complete();
  }

  getPost() {
    if (this.isConnected) {
      this.showIsOfflineToast();
    }
    else {
      this.isLoading = true;
      this.blogPostsProvider.getCatsPosts().subscribe(
        results => {
          console.log(JSON.stringify(results));
          results.posts.forEach(element => {
            console.log(JSON.stringify(element.thread));
          });
        },
        error => {
          console.log(JSON.stringify(error));
        }
      );
    }
  }

}
