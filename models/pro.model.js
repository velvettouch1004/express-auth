const mongoose = require("mongoose");

const ProSchema = new mongoose.Schema({
  pro: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Pro = mongoose.model("Pro", ProSchema);

module.exports = Pro;
