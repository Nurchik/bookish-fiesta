const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    cover: String,
    images: [String],
    authors: [Schema.Types.ObjectId],
    publishers: [Schema.Types.ObjectId]
    quantity: Number,
    year_published: Number,
    created_date: { type: Date, default: Date.now },
    updated_date: Date,
    available: { type: Boolean, default: true }
});

module.exports = BookSchema;