import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new mongoose.Schema({
    content: String,
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
