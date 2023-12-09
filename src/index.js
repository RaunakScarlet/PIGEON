const express = require("express");
const connectDB = require("./config/database.js");
const Tweet = require("./models/tweet.js");

const app = express();

app.listen(3000, async () => {
    console.log("server started");
    await connectDB();
    console.log("mongodb connected ");
    const tweet = await Tweet.create({
        content: "fifth tweet",
        email: "d@v.in",
    });
    console.log(tweet);
});
