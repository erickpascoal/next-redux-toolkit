export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonReponse {
  results: IPokemon[];
  count: number;
  next: string;
  previous: string;
}
