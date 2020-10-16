module.exports = {
	name: 'autoroll',
	description: 'Autoroller',
	execute(message) {
        
        let count;
        while(count != 10){
            setTimeout(() => {
                message.channel.send("$wa");
              }, 100)
              count++;
        }
	},
};
