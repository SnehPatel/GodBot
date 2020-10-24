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

        // User to give role to
        const target = message.mentions.users.first()

        // The Username of the user in Discord
        let memberUsername = message.mentions.members.first();

        // Get the role you want to give
        let role = message.guild.roles.cache.find(r => r.name === args[1]);

        let removal = message.guild.roles.cache.find(r => r.name === args[2]);

        if(!target){
            message.reply('Please specify someone to give role to.')
            return
        }

        console.log(args)

        const {guild} = message
        const member = guild.members.cache.get(target.id)

        member.roles.add(role).catch(console.error)
        member.roles.remove(removal).catch(console.error)
        message.channel.send(memberUsername.user.username + " had been given the role " + role.name + ".")

    }
}