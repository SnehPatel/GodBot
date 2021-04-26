module.exports = {
    name: 'rando',
    description: 'Pick from a list of things.',
    execute(message, args) {

        let ranList = args;
        // console.log(args);
        // console.log(ranList.length)

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            let randPick = Math.floor(Math.random() * (max - min) + min);
            return randPick;
        }
        
        let picked = getRandomInt(0, ranList.length);
        console.log(picked);
        message.reply("And the winner is..." + ranList[picked]);

    },
};