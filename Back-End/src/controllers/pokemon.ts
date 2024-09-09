import { get } from "@/services/axios";
import {
  getNumPokemon,
  getPokemonId,
  PokemonTypeStyles,
} from "@/utils/pokemon";
import { Pokemon, PokemonTypeAPI, typesPokemon } from "@/utils/types/pokemon";
import { Request, Response } from "express";

export const getPokemons = async (req: Request, res: Response) => {
  try {
    const getPokemons = await get("pokemon?limit=10");

    if (!getPokemons) {
      res.status(404).send("Pokemons not found");
    }

    const getPokemonTypesPromises = getPokemons.results.map(
      async (pokemon: Pokemon) => {
        const pokemonData = await get(`pokemon/${pokemon.name}`);
        const defaultType: typesPokemon = pokemonData.types[0].type.name;

        return {
          name: pokemonData.name,
          types: pokemonData.types.map(
            (type: PokemonTypeAPI) => type.type.name
          ),
          color: PokemonTypeStyles[defaultType].color,
          id: getPokemonId(pokemon.url),
          number: getNumPokemon(pokemon.url),
        };
      }
    );

    const getPokemonTypes = await Promise.all(getPokemonTypesPromises);
    res.status(200).send(getPokemonTypes);
  } catch (error) {
    res.status(500).send(error);
  }
};
