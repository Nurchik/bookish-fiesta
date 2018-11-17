const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {getNextValue} = require("./helpers/sequence");

let SubscriptionSchema = new Schema({
    id: Number,
    customer: Schema.Types.ObjectId,
    type: Schema.Types.ObjectId,
    start_date: Date,
    end_date: Date,
    stop_date: { type: Date, default: null },
    stop_cause: { type: String, default: null },
    expired: { type: Boolean, default: false },
    stopped: { type: Boolean, default: false }
});

SubscriptionSchema.pre("save", async function () {
    this.id = await getNextValue("subscriptions_counter"); // создали автоматически генерируемый sequence counter
});

module.exports = SubscriptionSchema;