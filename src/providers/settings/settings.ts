import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {

  constructor() {
    console.log('Hello SettingsProvider Provider');
  }

  public set app_initialized(v : string) {
    localStorage.setItem('app_initialized', v);
  }
  
  public get app_initialized() : string {
    return localStorage.getItem('app_initialized');
  }
  

}
