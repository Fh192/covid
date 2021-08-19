interface Common {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  tests: number;
  population: number;
}

export interface Country extends Common {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
    flag: string;
  };
  continent: string;
}

export interface Continent extends Common {
  continentInfo: {
    lat: number;
    long: number;
  };
  continent: string;
  countries: string[];
}

export interface HistoricalCountry {
  country: string;
  timeline: {
    cases: { [key: string]: number };
    deaths: { [key: string]: number };
    recovered: { [key: string]: number };
  };
}

export type HistoricalCountries = Array<HistoricalCountry>;
export type Global = Common;
export type Countries = Array<Country>;
export type Continents = Array<Continent>;
