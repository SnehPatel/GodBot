module.exports = {
	name: 'help',
	description: 'Shows all commands',
	execute(message, args) {
		message.channel.send(`
      These are my supported commands:

      **-help** - Displays the help menu.
      **-ping** - Pong.
      **-play <youtube-url>** - Plays music.
      **-poll <question>** - Ask a poll.
      **-giverole <user> <role>** - Assigns the user the role.
      **-removerole <user> <role>** - Removes the role from the user.
      `);
	}
};
