const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SEQUENCE_COUNTER_MODEL_NAME = "SequenceCounter";

const SequenceCounterSchema = new Schema({
    name: String,
    value: Schema.Types.Decimal128,
    step: Number,
    limit: { type: Schema.Types.Decimal128, default: null }
});

const DefaultSequenceCounterModel = mongoose.model(SEQUENCE_COUNTER_MODEL_NAME, SequenceCounterSchema);

function getSequenceCounterModel (connection) {
    let SequenceCounterModel = DefaultSequenceCounterModel;
    if (connection) {
        SequenceCounterModel = connection.model(SEQUENCE_COUNTER_MODEL_NAME, SequenceCounterSchema);
    }
    return SequenceCounterModel;
}

async function createSequenceCounter (connection, name, initial_value, step, limit = null) {
    let SequenceCounterModel = getSequenceCounterModel(connection);
    await SequenceCounterModel.create({name, value: initial_value, step, limit});
}


async function getNextValue (sequence_counter_name) {
    let SequenceCounterModel = getSequenceCounterModel(connection);

}

function removeSequenceCounter (sequence_counter_name) {

}