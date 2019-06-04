import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Posts } from './../../models/models';

import { BrowserTab } from '@ionic-native/browser-tab';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

import { ApiConfigProvider } from './../api-config/api-config';
import { BlogCategoriesProvider } from '../blog-categories/blog-categories';

@Injectable()
export class BlogPostsProvider {

  private api_key: string;
  private blog_url: string;

  constructor(
    public http: HttpClient,
    public browserTab: BrowserTab,
    public inAppBrowser: InAppBrowser,
    public socialSharing: SocialSharing,
    public blogCategories: BlogCategoriesProvider
  ) {
    console.log('Hello BlogPostsProvider Provider');

    this.api_key = ApiConfigProvider.blog_api_key;
    this.blog_url = ApiConfigProvider.blog_url + 'token=' + this.api_key;
  }

  sharePost(title: string, text: string, url: string) {
    this.socialSharing.share(text, title, null, url);
  }

  readPost(url: string) {
    this.browserTab.isAvailable().then(
      (isAvailable: boolean) => {
        isAvailable
          ? this.browserTab.openUrl(url)
          : this.inAppBrowser.create(url);
      }
    );
  }

  getCatsPosts() {
    const url = this.blog_url + this.blogCategories.catsUrl;
    return this.http.get<Posts>(url);
  }

  getDogsPosts() {
    const url = this.blog_url + this.blogCategories.dogsUrl;
    return this.http.get<Posts>(url);
  }

  getMusicPosts() { 
    const url = this.blog_url + this.blogCategories.musicUrl;
    return this.http.get<Posts>(url);
  }

  getMoviesPosts() { 
    const url = this.blog_url + this.blogCategories.moviesUrl;
    return this.http.get<Posts>(url);
  }

  get3DGraphicsPosts() {
    const url = this.blog_url + this.blogCategories._3dGraphicsUrl;
    return this.http.get<Posts>(url);
  }

  getAgriculturePosts() {
    const url = this.blog_url + this.blogCategories.agricultureUrl;
    return this.http.get<Posts>(url);
  }

  getArchitecturePosts() {
    const url = this.blog_url + this.blogCategories.architectureUrl;
    return this.http.get<Posts>(url);
  }

  getAirTravelPosts() {
    const url = this.blog_url + this.blogCategories.airTravelUrl;
    return this.http.get<Posts>(url);
  }

  getAnimationPosts() { 
    const url = this.blog_url + this.blogCategories.animationUrl;
    return this.http.get<Posts>(url);
  }

  getArtsHistoryPosts() { 
    const url = this.blog_url + this.blogCategories.artHistoryUrl;
    return this.http.get<Posts>(url);
  }

  getArtsEntertainPosts() { 
    const url = this.blog_url + this.blogCategories.artEntertainmentUrl;
    return this.http.get<Posts>(url);
  }

  getAstrologyPosts() { 
    const url = this.blog_url + this.blogCategories.astrologyUrl;
    return this.http.get<Posts>(url);
  }

  getAutomotivePosts() { 
    const url = this.blog_url + this.blogCategories.automotiveUrl;
    return this.http.get<Posts>(url);
  }

  getBeautyPosts() { 
    const url = this.blog_url + this.blogCategories.beautyUrl;
    return this.http.get<Posts>(url);
  }

  getBiologyPosts() { 
    const url = this.blog_url + this.blogCategories.biologyUrl;
    return this.http.get<Posts>(url);
  }

  getBodyArtsPosts() { 
    const url = this.blog_url + this.blogCategories.bodyArtUrl;
    return this.http.get<Posts>(url);
  }

  getBodyBuildingPosts() { 
    const url = this.blog_url + this.blogCategories.bodyBuildingUrl;
    return this.http.get<Posts>(url);
  }

  getBooksPosts() { 
    const url = this.blog_url + this.blogCategories.booksLitUrl;
    return this.http.get<Posts>(url);
  }

  getBoxingPosts() { 
    const url = this.blog_url + this.blogCategories.boxingUrl;
    return this.http.get<Posts>(url);
  }

  getBusinessPosts() { 
    const url = this.blog_url + this.blogCategories.businessUrl;
    return this.http.get<Posts>(url);
  }

  getCelebrityPosts() { 
    const url = this.blog_url + this.blogCategories.celebrityUrl;
    return this.http.get<Posts>(url);
  }

  getChemistryPosts() { 
    const url = this.blog_url + this.blogCategories.chemistryUrl;
    return this.http.get<Posts>(url);
  }

  getClothingPosts() { 
    const url = this.blog_url + this.blogCategories.clothingUrl;
    return this.http.get<Posts>(url);
  }

  getDatabasePosts() { 
    const url = this.blog_url + this.blogCategories.databasesUrl;
    return this.http.get<Posts>(url);
  }

  getDrawingPosts() { 
    const url = this.blog_url + this.blogCategories.drawingUrl;
    return this.http.get<Posts>(url);
  }

  getEducationPosts() { 
    const url = this.blog_url + this.blogCategories.educationUrl;
    return this.http.get<Posts>(url);
  }

  getEntertainmentPosts() { 
    const url = this.blog_url + this.blogCategories.entertainmentUrl;
    return this.http.get<Posts>(url);
  }

  getEuropePosts() { 
    const url = this.blog_url + this.blogCategories.europeUrl;
    return this.http.get<Posts>(url);
  }

  getExercisePosts() {
    const url = this.blog_url + this.blogCategories.exercisingUrl;
    return this.http.get<Posts>(url);
   }

  getFamilyPosts() { 
    const url = this.blog_url + this.blogCategories.familyUrl;
    return this.http.get<Posts>(url);
  }

  getFashionPosts() { 
    const url = this.blog_url + this.blogCategories.fashionUrl;
    return this.http.get<Posts>(url);
  }

  getFoodPosts() {
    const url = this.blog_url + this.blogCategories.foodDrinkUrl;
    return this.http.get<Posts>(url);
  }

  getFootballPosts() {
    const url = this.blog_url + this.blogCategories.footballUrl;
    return this.http.get<Posts>(url);
   }

  getGovernmentPosts() { 
    const url = this.blog_url + this.blogCategories.governmentUrl;
    return this.http.get<Posts>(url);
  }

  getHealthPosts() {
    const url = this.blog_url + this.blogCategories.healthUrl;
    return this.http.get<Posts>(url);
  }

  getHotelsPosts() { }

  getHumanResourcePosts() { 
    const url = this.blog_url + this.blogCategories.humanResUrl;
    return this.http.get<Posts>(url);
  }

  getImmigrationPosts() { 
    const url = this.blog_url + this.blogCategories.immigrationUrl;
    return this.http.get<Posts>(url);
  }

  getInsurancePosts() { 
    const url = this.blog_url + this.blogCategories.insuranceUrl;
    return this.http.get<Posts>(url);
  }

  getInternetTechPosts() { 
    const url = this.blog_url + this.blogCategories.internetUrl;
    return this.http.get<Posts>(url);
  }

  getJavascriptPosts() {
    const url = this.blog_url + this.blogCategories.javascriptUrl;
    return this.http.get<Posts>(url);
   }

  getNutritionPosts() { 
    const url = this.blog_url + this.blogCategories.nutritionUrl;
    return this.http.get<Posts>(url);
  }

  getPhotographyPosts() { 
    const url = this.blog_url + this.blogCategories.photographyUrl;
    return this.http.get<Posts>(url);
  }

  getPhysicsPosts() { 
    const url = this.blog_url + this.blogCategories.physicsUrl;
    return this.http.get<Posts>(url);
  }

  getPornographyPosts() { 
    const url = this.blog_url + this.blogCategories.pornographyUrl;
    return this.http.get<Posts>(url);
  }

  getPregnancyPosts() { 
    const url = this.blog_url + this.blogCategories.pregnancyUrl;
    return this.http.get<Posts>(url);
  }

  getRealEstatePosts() { 
    const url = this.blog_url + this.blogCategories.realEstateUrl;
    return this.http.get<Posts>(url);
  }

  getReligionPosts() {
    const url = this.blog_url + this.blogCategories.religionUrl;
    return this.http.get<Posts>(url);
  }

  getSciFiPosts() { 
    const url = this.blog_url + this.blogCategories.sciFiUrl;
    return this.http.get<Posts>(url);
  }

  getSciencePosts() { 
    const url = this.blog_url + this.blogCategories.scienceUrl;
    return this.http.get<Posts>(url);
  }

  getSocietyPosts() { 
    const url = this.blog_url + this.blogCategories.societyUrl;
    return this.http.get<Posts>(url);
  }

  getSpacePosts() { 
    const url = this.blog_url + this.blogCategories.spaceUrl;
    return this.http.get<Posts>(url);
  }

  getSportsPosts() { 
    const url = this.blog_url + this.blogCategories.sportsUrl;
    return this.http.get<Posts>(url);
  }

  getVideoGamesPosts() { 
    const url = this.blog_url + this.blogCategories.videoGamesUrl;
    return this.http.get<Posts>(url);
  }

  getIslamPosts() { 
    const url = this.blog_url + this.blogCategories.islamUrl;
    return this.http.get<Posts>(url);
  }

  getLuxuryPosts() {
    const url = this.blog_url + this.blogCategories.luxuryUrl;
    return this.http.get<Posts>(url);
  }

  getMarketingPosts() { 
    const url = this.blog_url + this.blogCategories.marketingUrl;
    return this.http.get<Posts>(url);
  }

  getMartialArtsPosts() { 
    const url = this.blog_url + this.blogCategories.martialArtsUrl;
    return this.http.get<Posts>(url);
  }

  getMensHealthPosts() { 
    const url = this.blog_url + this.blogCategories.mensHealthUrl;
    return this.http.get<Posts>(url);
  }

  getNetworkSecurityPosts() { 
    const url = this.blog_url + this.blogCategories.networkSecurityUrl;
    return this.http.get<Posts>(url);
  }

  getStocksPosts() { 
    const url = this.blog_url + this.blogCategories.stocksUrl;
    return this.http.get<Posts>(url);
  }

  getTechComputingPosts() { 
    const url = this.blog_url + this.blogCategories.technologyUrl;
    return this.http.get<Posts>(url);
  }

  getTelevisionPosts() { 
    const url = this.blog_url + this.blogCategories.televisionUrl;
    return this.http.get<Posts>(url);
  }

  getTeleCommsPosts() { 
    const url = this.blog_url + this.blogCategories.telecommunicationUrl;
    return this.http.get<Posts>(url);
  }

  getTravelPosts() { 
    const url = this.blog_url + this.blogCategories.travelUrl;
    return this.http.get<Posts>(url);
  }

  getWeatherPosts() { 
    const url = this.blog_url + this.blogCategories.weatherUrl;
    return this.http.get<Posts>(url);
  }

  getWeddingsPosts() { 
    const url = this.blog_url + this.blogCategories.weddingsUrl;
    return this.http.get<Posts>(url);
  }

  getWomensHealthPosts() { 
    const url = this.blog_url + this.blogCategories.womensHealthUrl;
    return this.http.get<Posts>(url);
  }

}
