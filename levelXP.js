const mongoServer = require('./server')
const levels = require('./models/levels');

module.exports = (client) => {
    client.on('message', message =>{
        const {member, author} = message

        addXP(author.id, 10)
    })
}

const addXP = async (userName, xpToAdd) => {
        const result = await levels.findOneAndUpdate({
            userName
        }, {
            userName,
            $inc: {
                xp: xpToAdd
            }
        })
        console.log("Result: ", userName);
}