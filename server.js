// const express = require('express');
const mongoose = require('mongoose');
const config = require("./config.json");
const path = require('path')

// const app = express();
const db = config.mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  async function addUser(userId){
    const user = await levels.findOne({userID: userId});
    if(user) return false;

    const newUser = new levels({
        userID: userId
    })

    await newUser.save();

    return newUser;
  };

module.exports.addUser;
// const Animal = require('./models/animal');

// const redPanda = new Animal({
//   name: 'Red Panda',
//   isEndangered: true,
//   vegetarian: false,
//   numberAlive: 6000
// })
// redPanda
//   .save()
//   .then(item => console.log(item))
//   .catch(err => console.log(err));

// const bonobo = new Animal({
//   name: 'Bonobo',
//   isEndangered: true,
//   vegetarian: true,
//   numberAlive: 1
// })
// bonobo
//   .save()
//   .then(item => console.log(item))
//   .catch(err => console.log(err));

// const penguin = new Animal({
//   name: 'Penguin',
//   isEndangered: false,
//   vegetarian: false,
//   numberAlive: 3
// })

// penguin
//   .save()
//   .then(item => console.log(item))
//   .catch(err => console.log(err));

//   Animal.find()
//   .sort({ date: -1 })
//   .then(items => console.log(items));
