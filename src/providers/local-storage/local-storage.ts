import { Injectable } from '@angular/core';
import { LocalStorageConfig } from './local-storage-config';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class LocalStorageProvider {

  private db: string;
  private saved_items_tbl: string;
  private offline_items_tbl: string;
  private db_config: LocalStorageConfig;

  constructor(public sqlite: SQLite) {
    console.log('Hello LocalStorageProvider Provider');

    this.db_config = new LocalStorageConfig();
    this.db = this.db_config.database;
    this.saved_items_tbl = this.db_config.saved_items_table;
    this.offline_items_tbl = this.db_config.offline_items_table;
  }

  /**
   * Creates local database and all tables required.
   * 
   * @private
   * @memberof LocalStorageService
   */
  private createLocalStorage() {
    this.sqlite.create({
      name: this.db,
      location: 'default'
    }).then(() => {
      this.createSavedItemsDatabaseTable();
      this.createOfflineItemsDatabaseTable();
    });
  }

  /**
   * Creates saved items table.
   * 
   * @private
   * @memberof LocalStorageService
   */
  private createSavedItemsDatabaseTable() {
    this.sqlite.create({
      name: this.db,
      location: 'default'
    }).then((dbo: SQLiteObject) => {
      dbo.executeSql(`CREATE TABLE IF NOT EXISTS ${this.saved_items_tbl} (
        id integer not null primary key autoincrement,
        title varchar(225) unique not null,
        description varchar(225) not null,
        url varchar(255) not null,
        image varchar(225) not null,
        publishedAt varchar(100) not null
      )`, []).then(val => { console.log(JSON.stringify(val)); }, err => { console.log(JSON.stringify(err)); });
    }).catch(except => { console.log(JSON.stringify(except)); });
  }

  /**
   * Creates table for offline items.
   * 
   * @private
   * @memberof LocalStorageService
   */
  private createOfflineItemsDatabaseTable() {
    this.sqlite.create({
      name: this.db,
      location: 'default'
    }).then((dbo: SQLiteObject) => {
      dbo.executeSql(`CREATE TABLE IF NOT EXISTS ${this.offline_items_tbl} (
        id integer not null primary key autoincrement,
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
   * Initializes the storage medium by calling the required
   * method to create the database and tables.
   * 
   * @memberof LocalStorageService
   */
  initApplicationLocalStorage() {
    this.createLocalStorage();
  }

}
