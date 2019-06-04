import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';

@Injectable()
export class ConnectivityProvider {

  constructor(public network: Network) {
    console.log('Hello ConnectivityProvider Provider');
  }

  /**
   * Checks whether the device is online. i.e, has an active internet connection.
   * 
   * @returns {boolean} 
   * 
   * @memberOf ConnectivityService
   */
  isOnline(): boolean {
    return this.network.type == 'none' || this.network.type == null ? false : true;
  }

  /**
   * Checks whether the device is offline.
   * 
   * @returns {boolean} 
   * 
   * @memberOf ConnectivityService
   */
  isOffline(): boolean {
    return this.network.type == 'none' || this.network.type == null ? true : false;
  }

  /**
   * Performs an operation once the device is connected from the internet.
   * 
   * @returns {Promise<any>} 
   * @memberof ConnectivityProvider
   */
  whenOnline(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.network.onConnect().subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }

  /**
   * Performs an operation once the device is disconnected from the internet.
   * 
   * @returns {Promise<any>} 
   * @memberof ConnectivityProvider
   */
  whenOffline(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.network.onDisconnect().subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }

}
