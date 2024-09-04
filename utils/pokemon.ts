import { useFetchQuery } from "@/hooks/useFecthQuery";
import { Pokemon } from "./types/pokemon";

export const getPokemonId = (url: string): number => {
  const parts = url.split("/");
  const id = parts.at(-2) ?? "0";

  return parseInt(id, 10);
};
