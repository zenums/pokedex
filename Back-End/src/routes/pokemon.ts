import express from "express";
import { getPokemons } from "@/controllers/pokemon";
const Route = express.Router();

Route.get("/", getPokemons);

export default Route;
