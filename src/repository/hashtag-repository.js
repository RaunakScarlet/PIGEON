const Hashtag = require("../models/hashtag");

class HashtagRepository {
    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id) {
        try {
            const tag = await Hashtag.findById(id)
                .populate({
                    path: "comments",
                })
                .lean();
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    // async update(id, data) {
    //     try {
    //         const tag = await tag.findByIdAndUpdate(id, data, {
    //             new: true,
    //         });
    //         // if not used new: true it will give previous data;
    //         return tag;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async delete(id) {
        try {
            const tag = await Hashtag.findByIdAndRemove(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({
                title: titleList,
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;
