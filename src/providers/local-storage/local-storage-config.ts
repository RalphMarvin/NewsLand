export class LocalStorageConfig {

   /**
    * The name of the local database.
    *
    * @type {string}
    * @memberof LocalStorageConfig
    */
   public database: string;

   /**
    * The saved items table name.
    *
    * @type {string}
    * @memberof LocalStorageConfig
    */
   public saved_items_table: string;

   /**
    * The offline items table name.
    *
    * @type {string}
    * @memberof LocalStorageConfig
    */
   public offline_items_table: string;

   constructor() {
      console.log('Hello LocalStorageConfig Provider');

      this.database = 'NewsLand.db';
      this.saved_items_table = 'SavedItemsTbl';
      this.offline_items_table = 'OfflineItemsTbl';
   }
}