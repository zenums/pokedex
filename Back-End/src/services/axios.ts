import axios, { AxiosRequestConfig } from "axios";

const urlPokemon = "https://pokeapi.co/api/v2/";

const config: AxiosRequestConfig = {
  baseURL: urlPokemon,
  headers: {
    accept: "application/json",
  },
};

const instance = axios.create(config);

export const get = async (url: string) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
