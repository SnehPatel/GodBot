const mongoose = require('mongoose');
const config = require("./config.json");
const path = require('path');
const levels = require('./models/levels');

const db = config.mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  module.exports.addUser = async function addUser(userId, userName, message){
    const user = await levels.findOne({userID: userId});
    if(user){
      message.channel.send(`${userName} is already registered.`)
      return false;
    }
    const newUser = new levels({
        userID: userId,
        name: userName
    })
    message.channel.send(`${userName} has been registered.`)
    await newUser.save();
    return newUser;
  };
