// db.js
const mongoose = require('mongoose');

const mongoURI = "mongodb://0.0.0.0:27017/record";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB Successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongo;
