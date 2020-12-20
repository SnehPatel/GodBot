const commando = require('discord.js-commando');

module.exports = class CoinFlip extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'coinflip',
            aliases: ['cf'],
            group: 'random',
            memberName: 'coinflip',
            description: 'flips a fuckin coin',
        })
    }

    async run(message) {

        let result = Math.round(Math.random());

        if(result == 1){
            message.reply("You got heads!");
        }else{
            message.reply("You got tails!");
        }
    }
}