const Tweet = require("../models/tweet");

class TweetRepository {
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({
                path: "comments",
            });
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(id, data, {
                new: true,
            });
            // if not used new: true it will give previous data;
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;
