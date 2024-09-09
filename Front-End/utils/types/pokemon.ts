export type typesPokemon =
  | "grass"
  | "fire"
  | "water"
  | "bug"
  | "normal"
  | "poison"
  | "electric"
  | "ground"
  | "fairy"
  | "fighting"
  | "psychic"
  | "rock"
  | "ghost"
  | "ice"
  | "dragon"
  | "dark"
  | "steel"
  | "flying";

export type Pokemon = {
  name: string;
  id: number;
  types: typesPokemon[];
  number: number;
};

export type Region = {
  name: regionName;
  url: string;
};

export type regionName =
  | "kanto"
  | "johto"
  | "hoenn"
  | "sinnoh"
  | "unova"
  | "kalos"
  | "alola"
  | "galar";

export type PokemonType = {
  slot: number;
  type: {
    name: typesPokemon;
    url: string;
  };
};
