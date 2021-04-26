module.exports = {
    name: 'cf',
    description: 'Flip a coin!',
    execute(message, args) {

        let result = Math.round(Math.random());

        if(result == 1){
            message.reply("You got heads!");
        }else{
            message.reply("You got tails!");
        }
        
    },
};