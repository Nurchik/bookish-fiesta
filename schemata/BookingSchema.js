const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BookingSchema = new Schema({
    id: Number,
    customer: Schema.Types.ObjectId,
    book: Schema.Types.ObjectId,
    created_date: { type: Date, default: now },
    expired: { type: Date, default: null },
    finished: { type: Date, default: null }, // finished when a book is returned
});

module.exports = BookingSchema;