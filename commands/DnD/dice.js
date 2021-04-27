const { MessageEmbed } = require("discord.js");

module.exports = {

  name: "dice",
  description: "Roll up to 10 dice of a kind",

  execute(message, args) {
    let rolls = [];
    let total = 0;

    if (args[0] > 20 || args[0] < 0) {
      message.reply("Please enter a valid dice type");

    } else if (args[1] > 10 || args[1] <= 0) {
      message.reply("Please enter a valid number of dice.");
      
    } else {
      for (let i = 0; i < args[0]; i++) {
        rolls[i] = Math.floor(Math.random() * args[0]) + 1;
        total += rolls[i];

      }

      const embed = new MessageEmbed()
        .setColor("#EFFF00")
        .setTitle(`D20 Roller`)
        .addFields(
          {
            name: `Result of ${args[1]} d${args[0]}s:`,
            value: rolls,
          },
          {
            name: "Total:",
            value: total,
          }
        );

      message.channel.send(embed);
    }
  },
};
