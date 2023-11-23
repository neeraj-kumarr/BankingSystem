// models/CustomerRecord.js
const mongoose = require('mongoose');
const { Schema } = mongoose

const recordSchema = new mongoose.Schema({
    name: String,
    email: String,
    balance: Number
});

const CustomerRecord = mongoose.model('customer', recordSchema);

module.exports = CustomerRecord;
