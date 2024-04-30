import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";

import indexRouter from "./routes/index.js";
import corsHeaders from "./middlewares/cors-headers.js";

var app = express();
dotenv.config();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use(corsHeaders());
app.use("/", indexRouter);

export default app;
