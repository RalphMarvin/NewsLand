import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { CacheConfigProvider } from '../cache-config/cache-config';

import { NewsContent } from '../../models/models';

@Injectable()
export class LocalCacheProvider {

  private table: string;
  private database: string;
  private cache_config: CacheConfigProvider;

  constructor(public sqlite: SQLite) {
    console.log('Hello LocalCacheProvider Provider');

    this.cache_config = new CacheConfigProvider();
    this.database = this.cache_config.database;
    this.table = this.cache_config.table_name;
  }

  private escapeChar(text: string) {
    return text.replace(/'/g, "''");
  }

  /**
   * Creates the ocal cache database and it's table.
   * 
   * @private
   * @memberof LocalCacheService
   */
  private createLocalCache() {
    this.sqlite.create({
      name: this.database,
      location: 'default'
    }).then(() => {
      this.createCacheDatabaseTable();
    });
  }

  /**
   * Creates the cache database table.
   * 
   * @private
   * @memberof LocalCacheService
   */
  private createCacheDatabaseTable() {
    this.sqlite.create({
      name: this.database,
      location: 'default'
    }).then((dbo: SQLiteObject) => {
      dbo.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table} (
        id integer primary key autoincrement,
        key varchar(100) not null,
        title varchar(225) unique not null,
        source varchar(225) not null,
        image varchar(225) not null,
        url varchar(225) not null,
        description varchar(225) not null,
        publishedAt varchar(50)not null  
      )`, []).then(val => { console.log(JSON.stringify(val)); }, err => { console.log(JSON.stringify(err)); });
    }).catch(except => { console.log(JSON.stringify(except)); });
  }

  /**
   * Creates the cache storage.
   * 
   * @memberof LocalCacheService
   */
  initApplicationLocalCache() {
    this.createLocalCache();
  }

  /**
   * Drops the cache table and re-creates it.
   * 
   * @private
   * @memberof LocalCacheService
   */
  private resetCacheDatabase() {
    this.sqlite.create({
      name: this.database,
      location: 'default'
    }).then((dbo: SQLiteObject) => {
      dbo.executeSql(`DROP TABLE ${this.table}`, []).then(
        v => { this.createCacheDatabaseTable(); },
        e => { console.log(e); }
      );
    }).catch(except => { console.log('An error occured opening cache database : ' + JSON.stringify(except)); });
  }

  /**
   * Clears all items saved in the cache.
   * NOTE: Should be used with caution.
   * 
   * @memberof LocalCacheService
   */
  clearCache() {
    this.resetCacheDatabase();
  }

  /**
   * Removes a cached item from the cache.
   * 
   * @param {string} key 
   * @returns {Promise<any>} 
   * @memberof LocalCacheProvider
   */
  removeItem(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.database,
        location: 'default'
      }).then((dbo: SQLiteObject) => {
        dbo.executeSql(`DELETE FROM ${this.table} WHERE key = '${key}'`, []).then(
          v => { resolve(v); },
          e => { reject(e); }
        );
      }).catch(except => { console.log('An error occured opening cache database : ' + JSON.stringify(except)); });
    });
  }

  /**
   * Inserts a new item into the cache.
   * 
   * @param {string} key 
   * @param {NewsContent} data 
   * @returns {Promise<any>} 
   * @memberof LocalCacheProvider
   */
  saveItem(key: string, data: NewsContent): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.database,
        location: 'default'
      }).then((dbo: SQLiteObject) => {
        dbo.executeSql(`INSERT INTO ${this.table} (key, title, source, image, url, description, publishedAt) VALUES 
        ('${key}', '${this.escapeChar(data.title)}', '${data.source}', '${data.image}', '${data.url}', '${this.escapeChar(data.description)}', '${data.publishedAt}')`, []).then(
          v => { resolve(v); },
          e => { reject(e); }
        );
      }).catch(except => { console.log('An error occured opening cache database : ' + JSON.stringify(except)); });
    });
  }

  /**
   * Gets a cached item.
   * 
   * @param {string} key 
   * @returns {Promise<any>} 
   * @memberof LocalCacheProvider
   */
  getItem(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.database,
        location: 'default'
      }).then((dbo: SQLiteObject) => {
        dbo.executeSql(`SELECT * FROM ${this.table} WHERE key = '${key}' ORDER BY id DESC`, []).then(
          v => { resolve(v); },
          e => { reject(e); }
        );
      }).catch(except => { console.log('An error occured opening cache database : ' + JSON.stringify(except)); });
    });
  }

}
