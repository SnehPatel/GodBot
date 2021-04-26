const commando = require('discord.js-commando');

module.exports = class RemoveRole extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'removerole',
            aliases: ['rr'],
            group: 'moderation',
            memberName: 'removerole',
            description: 'Remove the specified role from the user',
            argsType: 'multiple',
            clientPermissions: [
                'MANAGE_ROLES'
            ],
            userPermissions:[
                'MANAGE_ROLES'
            ]
        })
    }

    async run(message, args) {

        const target = message.mentions.users.first()
        let memberUsername = message.mentions.members.first();
        let role = message.guild.roles.cache.find(r => r.name === args[1]);

        if(!target){
            message.reply('Please specify someone to give role to.')
            return
        }

        const {guild} = message
        const member = guild.members.cache.get(target.id)

        member.roles.remove(role).catch(console.error)
        message.channel.send(role.name + " has been removed from " + memberUsername.user.username + ".")
    }
}