const commando = require('discord.js-commando');
// const mongoServer = require('./server')
const Animal = require('./server')

module.exports = class dbfetch extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dbfetch',
            aliases: ['dbf'],
            group: 'dbtesting',
            memberName: 'dbfetch',
            // description: 'Enter in any number of items, and return a random item',
            // argsType: 'multiple'
        })
    }

    async run(msg) {
        Animal.find().sort({ date: -1 }).then(items => console.log(items));
    }
}