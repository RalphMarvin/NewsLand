import { Injectable } from '@angular/core';

@Injectable()
export class CacheConfigProvider {

  public database: string;
  public table_name: string;

  constructor() {
    console.log('Hello CacheConfigProvider Provider');

    this.database = 'NewsLand_Cache.db';
    this.table_name = 'CacheTbl';
  }

}
