export type Nullable<T> = T | null;

export type HeroType = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type ComicType = {
  id: number;
  description: string;
  title: string;
  pageCount: number;
  prices: {
    price: number;
  };
  series: {
    name: string;
  };
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type ResponseHero = {
  data: {
    results: HeroType[];
    total: number;
  };
};

export type ResponseComics = {
  data: {
    results: ComicType[];
    total: number;
  };
};
