import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/database.js";
import passport from "passport";
import apiRoutes from "./routes/index.js";
import {
    TweetRepository,
    UserRepository,
    HashtagRepository,
} from "./repository/index.js";
import LikeService from "./services/like-service.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);

app.use("/api", apiRoutes);

app.listen(3000, async () => {
    console.log("server started");
    await connectDB();
    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0, 10);
    // const users = await userRepo.getAll();
    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id, "Tweet", users[0].id);
});
