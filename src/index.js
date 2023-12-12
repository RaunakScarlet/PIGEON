import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/database.js";
import apiRoutes from "./routes/index.js";
import HashtagRepository from "./repository/hashtag-repository.js";
import { TweetRepository } from "./repository/index.js";
import service from "./services/tweet-service.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(3000, async () => {
    console.log("server started");
    await connectDB();
    let ser = new service();
    await ser.create({
        content: "done with #rEFRactor",
    });
});
