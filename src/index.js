const express = require("express");
const connectDB = require("./config/database.js");
const HashtagRepository = require("./repository/hashtag-repository.js");
const TweetService = require("./services/tweet-service.js");

const app = express();

app.listen(3000, async () => {
    console.log("server started");
    await connectDB();
    const repo = new TweetService();
    let tags = await repo.create({
        content: " i am #coding #mmm # bbb",
    });
    console.log(tags);
});
