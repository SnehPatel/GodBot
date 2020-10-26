module.exports = (client) => {
    const channelIdGeneral = '723984790000238625' //general channel
  
    client.on('guildMemberAdd', (member) => {
      // console.log(member)
  
      const message = `Welcome <@${member.id}>, to the TowerOfG0d!`
  
      const channelGeneral = member.guild.channels.cache.get(channelIdGeneral)
  
      member.roles.add('741833607051477032').catch(console.error);

      channelGeneral.send(message).then(message=> {
        message.delete({timeout: 60000})
      })
    })
  };
  