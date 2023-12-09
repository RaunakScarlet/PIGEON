const express = require("express");
const connectDB = require("./config/database.js");
const Tweet = require("./models/tweet.js");
const Comment = require("./models/comment.js");
const TweetRepository = require("./repository/tweet-repository.js");

const app = express();

app.listen(3000, async () => {
    console.log("server started");
    await connectDB();
    console.log("mongodb connected ");
    // const tweet = await Tweet.create({
    // content: "fifth tweet",
    // email: "d@v.in",
    // });

    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({
    //     content: "testing coment with schema",
    // });
    // console.log(tweet);
    // const comment = await Comment.create({
    //     content: "hope it will success",
    // });
    // tweet.comments.push(comment);
    // await tweet.save();
    const tweet = await tweetRepo.get("6574cf7f88a1ca4e3194b253");
    console.log(tweet);
});
