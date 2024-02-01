const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
