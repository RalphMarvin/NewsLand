import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { BackgroundMode } from '@ionic-native/background-mode';
import { BrowserTab } from '@ionic-native/browser-tab';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { HeaderColor } from '@ionic-native/header-color';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';
import { SocialSharing } from '@ionic-native/social-sharing'
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { IONIC_CONFIG } from '../environment/environment';
import { ComponentsModule } from '../components/components.module';

import { ApiConfigProvider } from '../providers/api-config/api-config';
import { CacheConfigProvider } from '../providers/cache-config/cache-config';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GlobalNewsProvider } from '../providers/global-news/global-news';
import { LocalNewsProvider } from '../providers/local-news/local-news';
import { LocalCacheProvider } from '../providers/local-cache/local-cache';
import { WeatherProvider } from '../providers/weather/weather';
import { SettingsProvider } from '../providers/settings/settings';
import { NewsLibraryProvider } from '../providers/news-library/news-library';
import { NewsSourcesProvider } from '../providers/news-sources/news-sources';
import { NewsCachingProvider } from '../providers/news-caching/news-caching';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { NewsCustomizationProvider } from '../providers/news-customization/news-customization';
import { CustomizedNewsProvider } from '../providers/customized-news/customized-news';
import { BlogPostsProvider } from '../providers/blog-posts/blog-posts';
import { BlogCategoriesProvider } from '../providers/blog-categories/blog-categories';
import { BlogCustomizationProvider } from '../providers/blog-customization/blog-customization';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, IONIC_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    SQLite,
    Network,
    StatusBar,
    BrowserTab,
    HeaderColor,
    InAppBrowser,
    SplashScreen,
    SocialSharing,
    BackgroundMode,
    BackgroundGeolocation,

    ApiConfigProvider,
    CacheConfigProvider,
    ConnectivityProvider,
    GlobalNewsProvider,
    LocalNewsProvider,
    LocalCacheProvider,
    WeatherProvider,
    SettingsProvider,
    NewsLibraryProvider,
    NewsSourcesProvider,
    NewsCachingProvider,
    LocalStorageProvider,
    NewsCustomizationProvider,
    CustomizedNewsProvider,
    BlogPostsProvider,
    BlogCategoriesProvider,
    BlogCustomizationProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
