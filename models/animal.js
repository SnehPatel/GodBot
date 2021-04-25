const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AnimalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  isEndangered: {
    type: Boolean,
    default: true
  },
  vegetarian: {
    type: Boolean,
    default: true
  },
  numberAlive: {
      type: Number,
      default: 0
  },
  dateOfEntry: {
    type: Date,
    default: Date.now()
  }
});
module.exports = Item = mongoose.model('animal', AnimalSchema);