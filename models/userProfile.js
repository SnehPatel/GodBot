const mongoose = require('mongoose');

const userProfile = new mongoose.Schema({
    userID: {type: String},
    name: {type: String},
    xp: {type: Number, default: 0},
    level: {type: Number, default: 1},
    ign: {type: String}
});

module.exports = mongoose.model('userProfile', userProfile);
