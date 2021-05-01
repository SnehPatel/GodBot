const canvacord = require("canvacord");
const { getNeededXP } = require("../../levelXP");
const userProfile = require("../../models/userProfile");
const Discord = require("discord.js");

module.exports = {
    name: 'rank',
    description: 'View your profile',
    execute(message, args) {

        const user = message.author.id;
        const user_avatar = message.author.avatar;
        const img = `https://cdn.discordapp.com/avatars/${user}/${user_avatar}.png`;
        
        userProfile.findOne({ userID: user }, 'xp level ign name userID', function(err, userInfo){
            if(err) return handleError(err);
            console.log('XP: %i and LEVEL: %i', userInfo.xp, userInfo.level);

            const rank = new canvacord.Rank()
            .setAvatar(img)
            .setCurrentXP(userInfo.xp)
            .setRequiredXP(getNeededXP(userInfo.level))
            .setLevel(userInfo.level)
            .setRank(0, " ", false)
            .setProgressBar("#FFFFFF", "COLOR")
            .setUsername(`${userInfo.name}`)
            .setDiscriminator("6969");

            rank.build()
                .then(data => {
                    const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                    message.channel.send(attachment);
            });
        });
 
    },
    
};