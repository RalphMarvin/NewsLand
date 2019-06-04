import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { LocalStorageConfig } from './../local-storage/local-storage-config';

import { NewsContent, SavedItems } from '../../models/models';

@Injectable()
export class NewsLibraryProvider {

  private db: string;
  private saved_items_tbl: string;
  private offline_items_tbl: string;
  private db_config: LocalStorageConfig;

  constructor(public sqlite: SQLite) {
    console.log('Hello NewsLibraryProvider Provider');

    this.db_config = new LocalStorageConfig();
    this.db = this.db_config.database;
    this.saved_items_tbl = this.db_config.saved_items_table;
    this.offline_items_tbl = this.db_config.offline_items_table;
  }

  private escapeChar(text: string) {
    return text.replace(/'/g, "''");
  }

  saveForOffline(item: NewsContent): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.db,
        location: 'default'
      }).then((dbo: SQLiteObject) => {
        dbo.executeSql(`INSERT INTO ${this.offline_items_tbl} (title, source, image, url, description, publishedAt) VALUES 
      ('${this.escapeChar(item.title)}', '${item.source}', '${item.image}', '${item.url}', '${this.escapeChar(item.description)}', '${item.publishedAt}')`, []).then(
          v => { resolve(v); },
          e => { reject(e); }
        )
      }).catch(ex => { console.log('An exception occured : ' + ex); });
    });
  }

  saveForLater(item: SavedItems): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.db,
        location: 'default'
      }).then((dbo: SQLiteObject) => {
        dbo.executeSql(`INSERT INTO ${this.saved_items_tbl} (title, description, url, image, publishedAt) VALUES 
      ('${this.escapeChar(item.title)}', '${this.escapeChar(item.description)}', '${item.url}', '${item.image}', '${item.publishedAt}')`,
          []).then(
          v => { resolve(v); },
          e => { reject(e); }
        )
      }).catch(ex => { console.log('An exception occured : ' + ex); });
    });
  }

  getOfflineItems(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.db,
        location: 'default'
      }).then((dbo: SQLiteObject) => {
        dbo.executeSql(`SELECT * FROM ${this.offline_items_tbl}`, []).then(
          v => { resolve(v); },
          e => { reject(e); }
        )
      }).catch(ex => { console.log('An exception occured : ' + ex); });
    });
  }

  getSavedItems(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.db,
        location: 'default'
      }).then((dbo: SQLiteObject) => {
        dbo.executeSql(`SELECT * FROM ${this.saved_items_tbl} ORDER BY id DESC`, []).then(
          v => { resolve(v); },
          e => { reject(e); }
        )
      }).catch(ex => { console.log('An exception occured : ' + ex); });
    });
  }

  removeSavedItem(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.db,
        location: 'default'
      }).then((dbo: SQLiteObject) => {
        dbo.executeSql(`DELETE FROM ${this.saved_items_tbl} WHERE id = '${id}'`, []).then(
          v => { resolve(v); },
          e => { reject(e); }
        )
      }).catch(ex => { console.log('An exception occured : ' + ex); });
    });
  }

  removeOfflineItem(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.db,
        location: 'default'
      }).then((dbo: SQLiteObject) => {
        dbo.executeSql(`DELETE FROM ${this.offline_items_tbl} WHERE id = '${id}'`, []).then(
          v => { resolve(v); },
          e => { reject(e); }
        )
      }).catch(ex => { console.log('An exception occured : ' + ex); });
    });
  }

}
