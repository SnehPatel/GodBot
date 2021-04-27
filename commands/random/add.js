const levels = require("../../models/levels");

module.exports = {
    name: 'add',
    description: 'Adding args!',
    execute(message, args) {
        // console.log(message.content)
        // console.log(args)

        let sum = 0
        for (const arg of args){
            sum += parseInt(arg)
        }

        message.reply(`The sum is ${sum}.`)
    },
};