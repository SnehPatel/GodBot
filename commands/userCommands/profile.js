const canvacord = require("canvacord");

module.exports = {
    name: 'pf',
    description: 'View your profile',
    execute(message, args) {

        const user = message.author;

        // const userData = getDataSomehow();

        const rank = new canvacord.Rank()
            .setAvatar(user.displayAvatarURL())
            .setCurrentXP(userData.xp)
            .setRequiredXP(userData.requiredXP)
            .setStatus("dnd")
            .setProgressBar("#FFFFFF", "COLOR")
            .setUsername("Snowflake")
            .setDiscriminator("0007");

        rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                message.channel.send(attachment);
            });
        
    },
};