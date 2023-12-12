import mongoose from "mongoose";
const { Schema } = mongoose;

const tweetSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            max: [250, "Tweet cannot have more than 250 characters"],
        },
    },
    { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
