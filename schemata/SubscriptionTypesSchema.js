const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SubscriptionTypesSchema = new Schema({
    id: Number,
    name: String,
    price: Number,
    max_bookings: Number,
    duration: Number //seconds
});

module.exports = SubscriptionTypesSchema;