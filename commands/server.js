module.exports = {
	name: 'server',
	description: 'List of server members',
	execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
}
};
