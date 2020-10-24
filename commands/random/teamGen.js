const commando = require('discord.js-commando');

module.exports = class TeamGenerator extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'teamgen',
            aliases: ['tg'],
            group: 'random',
            memberName: 'teamgen',
            description: 'creates random even teams',
            argsType:'multiple',
        })
    }

    async run(message, args) {

        const players = args

        let random = Math.floor(Math.random() * players.length);

        const team1 = []
        const team2 = []

        for(args in players){
            let randomeSlice = players.slice(random, 1)
            team1.push(randomeSlice)
        }

        console.log(players)
        console.log(players.length)
        console.log(team1)
    }
}