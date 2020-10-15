const Discord = require("discord.js");

module.exports = {
	name: 'addrole',
	description: 'Give role to others',
	execute(message, args) {

    let role = message.guild.roles.cache.find(r => r.name === args[1]);
    let targetMember = message.mentions.members.first();
    
    if(message.member.hasPermission('ADMINISTRATOR')){
        targetMember.roles.add(role).catch(console.error);
    }

    console.log(member);
    
    message.channel.send(member.user.username + " has been assgined the role " + role.name + ".");

    // // let role = message.guild.roles.cache.find(r => r.name === "Maplers");
    // const client = new Discord.Client();
    //
    // function getUserFromMention(mention){
    //   if(!mention) return;
    //
    //   if(mention.startsWith('<@') && mention.endsWith('>')){
    //     mention = mention.slice(3, -1);
    //     console.log("Slice 1 " + mention);
    //
    //     if(mention.startsWith('!')){
    //       mention = mention.slice(1);
    //       console.log("Slice 2: " + mention);
    //     }
    //     return client.users.cache.get(mention);
    //   }
    // }
    //
    // if(args[0]){
    //   const user = getUserFromMention(args[0]);
    //   if(!user){
    //     user.addRole(message.guild.roles.cache.find(r => r.name === args[1])).catch(console.error);
    //     return message.channel.send(user + " has been assigned " + message.guild.roles.cache.find(r => r.name === args[1]));
    //   }else {
    //     return message.reply('User not found! The user is: ' + args[0]);
    //   }
    // }

    // message.mentions.roles.add(message.guild.roles.cache.find(r => r.name === args[1])).catch(console.error);
    // message.channel.send(message.member + " has been assigned " + message.guild.roles.cache.find(r => r.name === args[1]));
	},
};
