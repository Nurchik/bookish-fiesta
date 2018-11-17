const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {getNextValue} = require("./helpers/sequence");

let BookSchema = new Schema({
    id: Number,
    title: String,
    isbn: String,
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

BookSchema.pre("save", async function () {
    this.id = await getNextValue("books_counter"); // создали автоматически генерируемый sequence counter
});

module.exports = BookSchema;