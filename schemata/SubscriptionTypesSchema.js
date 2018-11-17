const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {getNextValue} = require("./helpers/sequence");

let SubscriptionTypesSchema = new Schema({
    id: Number,
    name: String,
    price: Number,
    max_bookings: Number,
    duration: Number //seconds
});

SubscriptionTypesSchema.pre("save", async function () {
    this.id = await getNextValue("subscription_types_counter"); // создали автоматически генерируемый sequence counter
});

module.exports = SubscriptionTypesSchema;