const Commando = require('discord.js-commando')

module.exports = class AddCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'add',
            group: 'random',
            memberName: 'add',
            description: 'Adds numbers together',
            argsType: 'multiple'
        })
        
    }

    async run(message, args){
        console.log(message.content)
        console.log(args)

        let sum = 0
        for (const arg of args){
            sum += parseInt(arg)
        }

        message.reply(`The sum is ${sum}.`)
    }
}