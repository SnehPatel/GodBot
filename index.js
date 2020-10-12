const Discord = require("discord.js");
const fs = require('fs');
const config = require("./auth.json");

const welcome = require("./commands/welcome.js");

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () =>{
  console.log('G0DB0T is online!');
});

welcome(client);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const prefix = "-";

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

client.on("message", function(message) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    client.user.setPresence({
      activity:{
        name: `"${prefix}help" for help!`
      }
    })

    if (!client.commands.has(command)){
      return;
    }else{
      client.commands.get(command).execute(message, args);
    }

    // try {
    //     client.commands.get(command).execute(message, args);
    // } catch (error) {
    //     console.error(error);
    //     message.reply('there was an error trying to execute that command!');
    // }

});
client.login(config.token);
