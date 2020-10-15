const Discord = require("discord.js");

module.exports = {
	name: 'giverole',
	description: 'Give role to others',
	execute(message, args) {

        let role = message.guild.roles.cache.find(r => r.name === args[1]);
        let member = message.mentions.members.first();
        
        if(message.member.hasPermission('ADMINISTRATOR')){
            member.roles.add(role).catch(console.error);
            console.log(member);
            message.channel.send(member.user.username + " has been given the role " + role.name + ".");
        }else{
            message.channel.send(message.member.displayName + " you do not have permissions to do this!");
        }
	},
};
