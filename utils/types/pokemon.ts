export type typesPokemon = 'grass' | 'fire' | 'water';

export type Pokemon = {
  name: string;
  id: number;
  url: string;
  types: typesPokemon[];
};


