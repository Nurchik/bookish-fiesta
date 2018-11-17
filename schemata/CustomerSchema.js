const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {getNextValue} = require("./helpers/sequence");

let CustomerSchema = new Schema({
    id: Number,
    name: String,
    phone_number: String,
    email: { type: String, default: null },
    active: { type: Boolean, default: true },
    deactivated: { type: Boolean, default: false },
    deactivation_cause: { type: String, default: null },
    created_date: { type: Date, default: Date.now },
    updated_date: Date
});

CustomerSchema.pre("save", async function () {
    this.id = await getNextValue("customers_counter"); // создали автоматически генерируемый sequence counter
});

module.exports = CustomerSchema;