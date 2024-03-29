module.exports = {
    name: 'teams',
    description: 'Creates 2 teams from given list of players.',
    execute(message, args) {

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
            
            // console.log("before team2: " + team2);
            // console.log("before team1: " + team1);
            // console.log(picked)

            team2.push(args[picked]);
            team1.splice(picked, 1);
            
            // console.log("after team2: " + team2);
            // console.log("after team1: " + team1);
        }

        message.reply("Team1: " + team1);
        message.reply("Team2: " + team2);
    },
};