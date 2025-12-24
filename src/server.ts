import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./router";
import { connectDB } from "./config/db";
import { corsConfig } from "./config/cors";

const app = express();

connectDB();
app.use(cors(corsConfig));

//Read JSON bodies
app.use(express.json());

app.use("/api", router);

export default app;
