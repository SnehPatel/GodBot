const mongoose = require('mongoose');
const config = require("./config.json");
const path = require('path');
const levels = require('./models/levels');
const stats = require('./commands/leagueOfLegends/fetchStats');
const { getNeededXP } = require('./levelXP');

const db = config.mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  module.exports.addUser = async function addUser(userId, userName, gameName, message){
    const user = await levels.findOne({userID: userId});
    if(user){
      message.channel.send(`${userName} is already registered.`)
      return false;
    }
    const newUser = new levels({
        userID: userId,
        name: userName,
        ign: gameName
    })
    message.channel.send(`${userName} has been registered.`)
    await newUser.save();
    return newUser;
  };

  //Points to experience
  module.exports.pointToXP = async function pointToXP(gameName, points, message){
    const result = await levels.findOneAndUpdate({
      ign: gameName
    }, {
      $inc: {
          xp: points
      }
    }, {
      new: true
    })
    
    let {xp, level,userID} = result
    const needed = getNeededXP(level);

    console.log(xp,level,needed);

    if( xp >= needed){
      ++level;
      xp -= needed;
      let replyName = `<@${userID}>`;
      message.channel.send(`${replyName} is now Level: ${level} with ${xp} experience! You need ${(getNeededXP(level)-xp)}xp for your next level up!`);
      console.log(xp, level);
      await levels.updateOne({
          ign: gameName
      }, {
          level,
          xp
      })
    }

    console.log(gameName);
    console.log(points);
    
  };

  module.exports.doesUserExist = async function doesUserExist(userId, message){
    const user = await levels.findOne({userID: userId});
    if(user){
      message.channel.send(`${userName} is already registered.`)
      return false;
    }
    const newUser = new levels({
        userID: userId,
        name: userName,
        ign: gameName
    })
    message.channel.send(`${userName} has been registered.`)
    await newUser.save();
    return newUser;
  };
