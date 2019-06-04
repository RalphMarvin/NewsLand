import { Injectable } from '@angular/core';


@Injectable()
export class BlogCustomizationProvider {

  constructor() {
    console.log('Hello BlogCustomizationProvider Provider');
  }

  setFavoriteCategories(categories: string[]) {
    localStorage.setItem('blog_categories', categories.join());
  }

  getFavoriteCategories(): string [] {
    let categories = localStorage.getItem('blog_categories');
    return categories == null || categories == '' ? null : categories.split(',');
  }

}
