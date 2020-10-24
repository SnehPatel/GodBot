const commando = require('discord.js-commando');

module.exports = class GiveRole extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'giverole',
            aliases: ['gr'],
            group: 'moderation',
            memberName: 'giverole',
            description: 'Give the specified role to the user',
            argsType:'multiple',
            clientPermissions: [
                'MANAGE_ROLES'
            ],
            userPermissions: [
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

        member.roles.add(role).catch(console.error)
        message.channel.send(memberUsername.user.username + " had been given the role " + role.name + ".")

    }
}