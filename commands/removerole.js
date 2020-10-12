const Discord = require("discord.js");

module.exports = {
	name: 'removerole',
	description: 'Give role to others',
	execute(message, args) {
    let role = message.guild.roles.cache.find(r => r.name === args[1]);
    let member = message.mentions.members.first();
    member.roles.remove(role).catch(console.error);
    console.log(member);
		message.channel.send(role.name + " role removed from " + member.user.username + ".");
	},
};
