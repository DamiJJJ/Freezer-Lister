const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Freezerdb = mongoose.model("freezerdb", schema);

module.exports = Freezerdb;
