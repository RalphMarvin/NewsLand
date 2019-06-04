export class Articles {
   constructor(
      public status: string,
      public source: string,
      public sortBy: string,
      public articles: Article[]
   ) { }
}

export class Article {
   constructor(
      public author: string,
      public title: string,
      public description: string,
      public url: string,
      public urlToImage: string,
      public publishedAt: Date
   ) { }
}

export class Sources {
   constructor(
      public status: string,
      public sources: Source[]
   ) {}
}

export class Source {
   constructor(
      public id: string,
      public name: string,
      public description: string,
      public url: string,
      public category: string,
      public language: string,
      public country: string,
      public urlsToLogos: UrlsToLogos,
      public sortBysAvailable: string[]
   ) {}
}

export class UrlsToLogos {
   constructor(
      public small: string,
      public medium: string,
      public large: string
   ) {}
}

export class NewsContent {
   constructor(
      public title: string,
      public source: string,
      public image: string,
      public url: string,
      public description: string,
      public publishedAt: string
   ) { }
}

export class SavedItems {
   constructor(
      public title: string,
      public description: string,
      public url: string,
      public image: string,
      public publishedAt: string,
      public id?: number
   ) { }
}

export class WeatherReport {
   constructor(
      public coord: Coord,
      public weather: Weather[],
      public _base: string,
      public Main: Main,
      public wind: Wind,
      public clouds: Clouds,
      public rain: Rain,
      public dt: number,
      public sys: Sys,
      public id: number,
      public name: string,
      public cod: number
   ) { }
}

export class Weather {
   constructor(
      public id: number,
      public main: string,
      public description: string,
      public icon: string
   ) { }
}

export class Coord {
   constructor(
      public lon: number,
      public lat: number
   ) { }
}

export class Main {
   constructor(
      public temp: number,
      public pressure: number,
      public humidity: number,
      public temp_min: number,
      public temp_max: number
   ) { }
}

export class Wind {
   constructor(
      public speed: number,
      public deg: number
   ) { }
}

export class Clouds {
   public all: number
} { }

export class Rain {
   public _3h: number
} { }

export class Sys {
   constructor(
      public type: number,
      public id: number,
      public message: number,
      public country: string,
      public sunrise: number,
      public sunset: number
   ) { }
}

export class Posts {
   constructor(
      public posts: Post[]
   ) {}
}

export class Post {
   constructor(
      public thread: Thread
   ) {}
}

export class Thread {
   constructor(
      public uuid: string,
      public url: string,
      public ord_in_thread: number,
      public author: string,
      public published: Date,
      public title: string,
      public text: string,
      public highlightText: string,
      public highlightTitle: string,
      public language: string,
      public external_links: object[],
      public entities: Entities,
      public rating: object,
      public crawled: Date
   ) {}
}

export class Entities {
   constructor(
      public persons: Persons[],
      public organizations: Organizations[],
      public locations: Locations[]
   ) {}
}

export class Persons {
   constructor(
      public name: string,
      public sentiment: string
   ) { }
}

export class Organizations {
   constructor(
      public name: string,
      public sentiment: string
   ) { }
}

export class Locations {
   constructor(
      public name: string,
      public sentiment: string
   ) {}
}

export class BlogContent {
   constructor(
      public title: string,
      public text: string,
      public url: string
   ) {}
}