const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {getNextValue} = require("./helpers/sequence");

let BookingSchema = new Schema({
    id: Number,
    customer: Schema.Types.ObjectId,
    book: Schema.Types.ObjectId,
    created_date: { type: Date, default: now },
    expired: { type: Date, default: null },
    finished: { type: Date, default: null }, // finished when a book is returned
});

BookingSchema.pre("save", async function () {
    this.id = await getNextValue("bookings_counter"); // создали автоматически генерируемый sequence counter
});

module.exports = BookingSchema;