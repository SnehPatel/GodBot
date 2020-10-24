const commando = require('discord.js-commando');

module.exports = class RemoveRole extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'removerole',
            aliases: ['rr'],
            group: 'moderation',
            memberName: 'removerole',
            description: 'Remove the specified role from the user',
            
        })
    }

    async run(msg) {
        
    }
}