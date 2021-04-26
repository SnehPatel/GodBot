module.exports = {
    name: 'lucky',
    description: 'Flips like 7 coins I think...',
    execute(message, args) {

        let choice = args;
        var results = [];
        let count = 7;
        let flipCount = 0;
        
        if(!choice){
            message.reply('Please choose heads or tails.')
            return
        }
        function coinFlip(){
            let flip = Math.round(Math.random());
            return flip;
        }
        var i;
        for(i = 0; i < count; i++){
            let flip = coinFlip();

            if(flip == 1){
                results.push("heads");
            }else{
                results.push("tails");
            }
        }
        
        for(i=0; i<=results.length-1; i++){
            // console.log(results[i]+" "+results[i+1]);
            if(results[i]===results[i+1]){
                flipCount++;
                // console.log(flipCount);
            }else if(results[i]!=results[i+1]){
                message.reply("You lose. You picked " + choice +". You rolled: " + results.toString());
                break;
            }
            if(flipCount>=6 && results[0]===choice){
                message.reply("You Win! You chose " + choice +". You rolled: " + results.toString());
                break;
            }
        }
        // console.log(results);
        // console.log(results);
    },
};