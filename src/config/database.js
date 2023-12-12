import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost/pigeon');
}

export default connectDB;