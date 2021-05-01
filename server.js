const mongoose = require('mongoose');
const config = require("./config.json");
const path = require('path');
const userProfile = require('./models/userProfile');
const stats = require('./commands/leagueOfLegends/fetchStats');
const { getNeededXP } = require('./levelXP');

const db = config.mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  module.exports.addUser = async function addUser(userId, userName, gameName, message){
    const user = await userProfile.findOne({userID: userId});
    if(user){
      message.channel.send(`${userName} is already registered.`)
      return false;
    }
    const newUser = new userProfile({
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
    const result = await userProfile.findOneAndUpdate({
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
      await userProfile.updateOne({
          ign: gameName
      }, {
          level,
          xp
      })
    }

    console.log(gameName);
    console.log(points);
    
  };

  // // Get User info
  // module.exports.userInfo = async function userInfo(userId, message){
  //   const user = await levels.findOne({userID: userId});
  //   if(user){
  //     message.channel.send(`${userName} is already registered.`)
  //     return false;
  //   }

  //   return newUser;
  // };
