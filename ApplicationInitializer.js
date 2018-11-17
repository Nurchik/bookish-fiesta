const mongoose = require("mongoose");

const MONGO_DB_CONNECTION_URL = "";

async function initApplication () {
    await mongoose.connect(MONGO_DB_CONNECTION_URL);
}

module.exports = {initApplication};