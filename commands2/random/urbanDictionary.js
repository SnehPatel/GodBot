const Commando = require('discord.js-commando')
const queryString = require('querystring');

module.exports = class UrbanDictionary extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'urbandictionary',
            aliases: ['ud'],
            group: 'random',
            memberName: 'urbandictionary',
            description: 'Testing rest API',
            argsType: 'multiple'
        })
        
    }

    async run(msg, args){
        const query = queryString.stringify({term: args.join(' ')});
        const {list}=await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
        message.channel.send(list[0].definition);
        console.log("this is working");
    }
}