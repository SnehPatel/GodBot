const queryString = require('querystring');
const fetch = require('node-fetch');
// const { leagueKey } = require('~/config.json');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'lg',
    description: 'Fetch last game of specified summoner name.',

    execute(message, args) {
        
        async function getStat(){

        //Accommodating for special character names
        if(currentSummoner === "summoner1"){
            currentSummoner = "Summ%C3%B8ner1";
          }else if(currentSummoner === "vaynesthighs"){
            currentSummoner = "VaynesTh%C3%ADghs";
          }else if(currentSummoner === "nice"){
            currentSummoner = "n%C4%B1ce";
          }
            
        //getting the puuid
        const query = queryString.stringify({term: args.join(' ')});
        const getPuuid=await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=RGAPI-77e3ceac-9c27-4cdb-9092-1db39c3fda05`).then(response => response.json());
        // console.log(getPuuid.puuid);

        //getting match id
        const getMatchid = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${getPuuid.puuid}/ids?start=0&count=1&api_key=RGAPI-77e3ceac-9c27-4cdb-9092-1db39c3fda05`).then(response => response.json());
        // console.log(getMatchid[0]);

        //getting a match
        const getLastMatch = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${getMatchid[0]}?api_key=RGAPI-77e3ceac-9c27-4cdb-9092-1db39c3fda05`).then(response => response.json());
        // console.log(getLastMatch.metadata.participants[0]);
        
        //finding the player in the match
        var myJ = [
            getLastMatch.metadata.participants[0],
            getLastMatch.metadata.participants[1],
            getLastMatch.metadata.participants[2],
            getLastMatch.metadata.participants[3],
            getLastMatch.metadata.participants[4],
            getLastMatch.metadata.participants[5],
            getLastMatch.metadata.participants[6],
            getLastMatch.metadata.participants[7],
            getLastMatch.metadata.participants[8],
            getLastMatch.metadata.participants[9]];
        
        for(let i=0;i<myJ.length;i++){
            if(myJ[i] == getPuuid.puuid){

                const embed = new MessageEmbed()
	            .setColor('#EFFF00')
	            .setTitle(`${args[0]}: Last Game Stats`)
	            .addFields(
                { name: 'Kills', value: getLastMatch.info.participants[i].kills},
                { name: 'Deaths', value: getLastMatch.info.participants[i].deaths},
                { name: 'Assists', value: getLastMatch.info.participants[i].assists}
            );          

            message.channel.send(embed);
                // message.reply(`\n${args[0]}'s last game KDA was...\nK:`+getLastMatch.info.participants[i].kills+"\nD:"+
                // getLastMatch.info.participants[i].deaths+"\nA:"+getLastMatch.info.participants[i].assists);
            }
        }
        }
       
        getStat();
    },
};