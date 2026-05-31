// database se communication mein problem aa sakti hai //try catch mein wrap karo, database is always in another continent, async await lagao // require('dotenv').config({path: './env'})

import dns from 'node:dns';

// Use Google Public DNS (or Cloudflare's 1.1.1.1)
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { } from 'dotenv/config';
import connectDB from "./db/index.js";
import app from "./app.js"
  

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port: ${process.env.PORT}`)
    });
})
.catch((err) => {
    console.log("MONGODB connection failed!!!", err);
})


/*
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "../constants";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
})()

*/