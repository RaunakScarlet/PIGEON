const mongoose = require("mongoose");
const { Schema } = mongoose;

const tweetSchema = new mongoose.Schema(
    {
        content: { type: String, required: true },
        email: String,
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
    },
    { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
