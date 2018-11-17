const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {getNextValue} = require("./helpers/sequence");

let AuthorSchema = new Schema({
    id: Number,
    name: String,
    description: String,
    images: [String],
    created_date: { type: Date, default: Date.now },
    updated_date: Date
});

AuthorSchema.pre("save", async function () {
    this.id = await getNextValue("authors_counter"); // создали автоматически генерируемый sequence counter
});

module.exports = AuthorSchema;