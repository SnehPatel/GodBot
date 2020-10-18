module.exports = {
	name: 'autoroll',
	description: 'Autoroller',
	execute(message) {
        
        var count = 0;
        message.channel.send("$wa");
        while(count != 10){
            setTimeout(() => {
                message.channel.send("$wa" + count);
              }, 2000)
              console.log(count);
              count++;
        }
	},
};
