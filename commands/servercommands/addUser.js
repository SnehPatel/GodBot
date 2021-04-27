const server = require('../../server')

module.exports = {
    name: 'au',
    description: 'Adding args!',
    execute(message, args) {

        let memberUsername = message.mentions.members.first();

        server.addUser(memberUsername.user.id, memberUsername.user.username, message);

        console.log(args[0], memberUsername.user.username);
    },
};