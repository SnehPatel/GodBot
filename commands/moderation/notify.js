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
            // message.channel.send("Mudae role successfully removed")
            message.react('❌')
        } else {
            member.roles.add('769437078655336468').catch(console.error)
            // message.channel.send("Mudae role successfully added")
            message.react('✅')
        }        
                // CronJob to notify users with Mudae role of new claim
        let CronJob = require('cron').CronJob;
        let job = new CronJob('36 1,4,7,10,13,16,19,22 * * *', function() {
            var guild = client.guilds.cache.get('723967523548168282');
            if (guild && guild.channels.cache.get('754566481299243108')) {
            guild.channels.cache.get('754566481299243108').send("<@&754565733605834824> Claim timer is reset!");
            } else {
            console.log("Oh no...");
            }
        }, null, true, 'America/Toronto');
        job.start();
    }
}