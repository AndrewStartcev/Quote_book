const mongoose = require("mongoose");

const quoteShema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    unique: true
  },
  category: {
    type: Array,
  },
  author: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
    unique: true
  },

});
module.exports = mongoose.model('Quote', quoteShema)
