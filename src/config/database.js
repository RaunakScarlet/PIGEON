const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost/pigeon');
}
    module.exports = connectDB;