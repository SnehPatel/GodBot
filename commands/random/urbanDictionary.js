const queryString = require('querystring');
const fetch = require('node-fetch');
module.exports = {
    name: 'define',
    description: 'Pulls up an urban dictionary definition of a given word(arg).',
    execute(message, args) {
        
        async function getDef(){
            
        const query = queryString.stringify({term: args.join(' ')});
        const {list}=await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
        message.channel.send(list[0].definition);
        console.log("this is working");
        }

        getDef();
    },
};