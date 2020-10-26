const commando = require('discord.js-commando');

module.exports = class randompicker extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'randompicker',
            aliases: ['rp'],
            group: 'random',
            memberName: 'randompicker',
            description: 'Enter in any number of items, and return a random item',
            argsType: 'multiple'
        })
    }

    async run(msg, args) {
        let ranList = args;
        console.log(args);
        console.log(ranList.length)

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            let randPick = Math.floor(Math.random() * (max - min) + min);
            return randPick;
        }
        
        let picked = getRandomInt(0, ranList.length);
        console.log(picked);
        msg.reply("And the winner is..." + ranList[picked]);
        
    }
}

// Getting a random integer between 2 values, inclusive
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
