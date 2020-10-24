const commando = require('discord.js-commando');

module.exports = class GiveRole extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'notify',
            aliases: ['notify'],
            group: 'moderation',
            memberName: 'notify',
            description: 'Give/remove the Mudae role to the user',
            clientPermissions: [
                'MANAGE_ROLES'
            ]
        })
    }

    async run(message) {

        const member = message.member

        if (member._roles.includes('769437078655336468')) {
            member.roles.remove('769437078655336468').catch(console.error)
            message.channel.send("Mudae role successfully removed")
        } else {
            member.roles.add('769437078655336468').catch(console.error)
            message.channel.send("Mudae role successfully added")

        }
        message.react('✅')
    }
}