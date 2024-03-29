const mongoServer = require('./server')
const userProfile = require('./models/userProfile');

module.exports = (client) => {
    client.on('message', message =>{
        const {author} = message

        addXP(author.id, 7, message)
    })
}

const getNeededXP = level => level * level * 100

const addXP = async (userID, xpToAdd, message) => {
    const result = await userProfile.findOneAndUpdate({
        userID
    }, {
        $inc: {
            xp: xpToAdd
        }
    })

    let {xp, level} = result
    
    const needed = getNeededXP(level);

    if( xp >= needed){
        ++level;
        xp -= needed;
        message.reply(`You are now Level: ${level} with ${xp} experience! You need ${getNeededXP(level)} XP to level again!`);
        console.log(level, xp);
        await userProfile.updateOne({
            userID
        }, {
            level,
            xp
        })
    }

    // console.log("Result: ", result);
}

module.exports.getNeededXP = getNeededXP;