const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {getNextValue} = require("./helpers/sequence");

let PublisherSchema = new Schema({
    id: Number,
    name: String,
    description: String,
    images: [String],
    created_date: { type: Date, default: Date.now },
    updated_date: Date
});

PublisherSchema.pre("save", async function () {
    this.id = await getNextValue("publishers_counter"); // создали автоматически генерируемый sequence counter
});

module.exports = PublisherSchema;