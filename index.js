const fs = require('fs');
const config = require("./config.json");

const path = require('path')
const Commando = require('discord.js-commando')
const welcome = require('./welcome')

const client = new Commando.CommandoClient({
  owner: '268549194816552960',
  commandPrefix: config.prefix
})

client.on('ready', async() => {
  console.log('G0DB0T is online!');

  client.registry
    .registerGroups([
      ['random', 'Random Commands'],
      ['moderation', 'Mod Commands'],
      ['games', 'Game Commands']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'))

  welcome(client)
});

// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// const prefix = "-";

// for (const file of commandFiles) {
//     const command = require(`./commands/${file}`);
//     client.commands.set(command.name, command)
// }

client.login(config.token);
