import express from "express";
import connectDB from "./config/database.js";
import HashtagRepository from "./repository/hashtag-repository.js";
import {TweetRepository} from "./repository/index.js";
import service from './services/tweet-service.js'

const app = express();

app.listen(3000, async () => {
    console.log("server started");
    await connectDB();
    let ser = new service();
    await ser.create({
        content:'done with #refractor'
    })
});
