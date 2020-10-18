module.exports = {
	name: 'help',
	description: 'Shows all commands',
	execute(message, args) {
		message.channel.send(`
      These are my supported commands:

      **-help** - Displays the help menu.
      **-ping** - Pong.
      **-poll <question>** - Ask a poll.
      **-server** - Server information.

      ADMIN Commands:

      **-giverole <user> <role>** - Assigns the user the role.
      **-removerole <user> <role>** - Removes the role from the user.
      `);
	}
};
