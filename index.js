const fs = require('fs');
const config = require("./config.json");

const path = require('path')
const Commando = require('discord.js-commando')

const client = new Commando.CommandoClient({
  owner: '268549194816552960',
  commandPrefix: config.prefix
})

client.on('ready', async() => {
  console.log('G0DB0T is online!');

  // CronJob to notify users with Mudae role of new claim
  let CronJob = require('cron').CronJob;
  let job = new CronJob('36 1,4,7,10,13,16,19,22 * * *', function() {
    var guild = client.guilds.cache.get('723967523548168282');
    if (guild && guild.channels.cache.get('754566481299243108')) {
      guild.channels.cache.get('754566481299243108').send("<@&754565733605834824> Claim timer is reset!").then(() => client.destroy());
    } else {
      console.log("Oh no...");
    }
  }, null, true, 'America/Toronto');
  job.start();

  client.registry
    .registerGroups([
      ['random', 'random commands'],
      ['moderation', 'mod commands']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'))

});

// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// const prefix = "-";

// for (const file of commandFiles) {
//     const command = require(`./commands/${file}`);
//     client.commands.set(command.name, command)
// }

client.login(config.token);
