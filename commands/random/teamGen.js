const commando = require('discord.js-commando');

module.exports = class teamgen extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'teamgen',
            aliases: ['tg'],
            group: 'random',
            memberName: 'teamgen',
            description: 'creates two teams based on entered names',
            argsType: 'multiple',
        })

    }
    
    async run(msg, args) {

        let count;
        let team1 = args;
        var team2 = [];
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            let randPick = Math.floor(Math.random() * (max - min) + min);
            return randPick;
        }

        for(count = 0; count < (team1.length/2) + 1; count++){
            let picked = getRandomInt(0, team1.length);
            
            console.log("before team2: " + team2);
            console.log("before team1: " + team1);
            console.log(picked)

            team2.push(args[picked]);
            team1.splice(picked, 1);
            
            console.log("after team2: " + team2);
            console.log("after team1: " + team1);
        }

        msg.reply("Team1: " + team1);
        msg.reply("Team2: " + team2);
        
        
    }
}
