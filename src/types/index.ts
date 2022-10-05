export type CountriesHistory = Array<CountryHistory>;
export type Global = Common;
export type Countries = Array<Country>;
export type Continents = Array<Continent>;

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
  casesPerOneMillion: number;
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

export interface CountryHistory {
  country: string;
  timeline: {
    cases: { [key: string]: number };
    deaths: { [key: string]: number };
    recovered: { [key: string]: number };
  };
}

export interface Statistics {
  countries: Countries;
  global: Global;
  historical: CountriesHistory;
}

export interface StatisticsSliceState {
  countries: Countries;
  global: Global;
  historical: CountriesHistory;
  fetching: boolean;
}
