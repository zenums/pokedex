import express, { Request, Response } from "express";
import RouteP from "./routes/pokemon";

// ********************************
const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(express.json()).use("/api/pokemon", RouteP);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
