import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { HeaderColor } from '@ionic-native/header-color';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundMode } from '@ionic-native/background-mode';

import { SettingsProvider } from '../providers/settings/settings';
import { SettingsValues } from '../providers/settings/settings-values';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = this.getRootPage();

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, headerColor: HeaderColor, backgroundMode: BackgroundMode, public settings: SettingsProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('#4d4292');
      splashScreen.hide();

      // Set header color
      headerColor.tint('#5f53ad');

      // Enable background mode once the application starts.
      backgroundMode.configure({ silent: true, hidden: true });
      if (!backgroundMode.isEnabled) backgroundMode.enable();
    });
  }

  getRootPage() {
    return this.settings.app_initialized != SettingsValues.AppInitializedOption.Yes
      ? 'StartPage'
      : 'MenuPage';
  }
}

