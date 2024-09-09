export const PokemonTypeStyles = {
  grass: {
    color: "99, 188, 90",
  },
  fire: {
    color: "255, 157, 85",
  },
  water: {
    color: "80, 144, 214",
  },
  poison: {
    color: "181, 103, 206",
  },
  bug: {
    color: "168, 184, 32",
  },
  normal: {
    color: "156, 156, 156",
  },
  electric: {
    color: "247, 208, 44",
  },
  ground: {
    color: "219, 181, 77",
  },
  fairy: {
    color: "241, 145, 201",
  },
  fighting: {
    color: "194, 46, 40",
  },
  psychic: {
    color: "249, 85, 135",
  },
  rock: {
    color: "182, 161, 54",
  },
  steel: {
    color: "183, 183, 206",
  },
  ice: {
    color: "150, 217, 214",
  },
  ghost: {
    color: "123, 105, 188",
  },
  flying: {
    color: "148, 174, 252",
  },
  dragon: {
    color: "115, 98, 227",
  },
  dark: {
    color: "112, 88, 72",
  },
};

export const getPokemonId = (url: string): number => {
  const parts = url.split("/");
  const id = parts.at(-2) ?? "0";

  return parseInt(id, 10);
};

export const getNumPokemon = (url: string): string => {
  const parts = url.split("/");
  const id = parts.at(-2) ?? "0";

  return parseInt(id, 10).toString().padStart(3, "0");
};

export function cleanDescription(description: string | undefined): string {
  if (!description) return "";
  return description.replace(/[\n\f]/g, " ");
}
