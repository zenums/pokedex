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
