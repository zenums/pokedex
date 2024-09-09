import axios, { AxiosRequestConfig } from "axios";

const urlBack = "http://172.20.10.2:3000/api/";

const config: AxiosRequestConfig = {
  baseURL: urlBack,
  headers: {
    accept: "application/json",
  },
};

const instance = axios.create(config);

export const get = async (url: string) => {
  try {
    const response = await instance.get(url);
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
