module.exports = {
	name: 'poll',
	description: 'Ask a poll',
	execute(message, args) {

    const addReactions = message =>{
      message.react('👍')
      setTimeout(() => {
        message.react('👎')
      }, 200)
    }
    if(!args[0]){
      message.channel.send("Type a statement or ask a question to start a poll!")
    }else{
      addReactions(message);
    }
	}
};
