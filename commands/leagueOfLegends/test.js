const queryString = require("querystring");
const fetch = require("node-fetch");
// const { leagueKey } = require('~/config.json');
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "test",
  description: "Fetch last game of specified summoner name.",

  execute(message, args) {
    async function getStat() {

      //Looping through all names entered
      for (let i = 0; i < args.length; i++) {

        //Storing current summoner name
        let temp = args[i];
        let currentSummoner = args[i];

        //checking if current name has a special character
        if (currentSummoner.indexOf("ø") > -1) {
          currentSummoner = currentSummoner.replace("ø", "%C3%B8");
        } else if (currentSummoner.indexOf("í") > -1) {
          currentSummoner = currentSummoner.replace("í", "%C3%AD");
        }

        //getting the puuid
        const query = queryString.stringify({ term: args.join(" ") });
        const getPuuid = await fetch(
          `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${currentSummoner}?api_key=RGAPI-d0b3162d-adeb-48ec-8714-bc88efe31cd8`
        ).then((response) => response.json());

        //getting match id
        const getMatchid = await fetch(
          `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${getPuuid.puuid}/ids?start=0&count=1&api_key=RGAPI-d0b3162d-adeb-48ec-8714-bc88efe31cd8`
        ).then((response) => response.json());

        //getting a match
        const getLastMatch = await fetch(
          `https://americas.api.riotgames.com/lol/match/v5/matches/${getMatchid[0]}?api_key=RGAPI-d0b3162d-adeb-48ec-8714-bc88efe31cd8`
        ).then((response) => response.json());

        //Adding all participants of a match to an array
        let myJ = [
          getLastMatch.metadata.participants[0],
          getLastMatch.metadata.participants[1],
          getLastMatch.metadata.participants[2],
          getLastMatch.metadata.participants[3],
          getLastMatch.metadata.participants[4],
          getLastMatch.metadata.participants[5],
          getLastMatch.metadata.participants[6],
          getLastMatch.metadata.participants[7],
          getLastMatch.metadata.participants[8],
          getLastMatch.metadata.participants[9],
        ];

        //Searching through a matches participants for current player
        for (let i = 0; i < myJ.length; i++) {
          if (myJ[i] == getPuuid.puuid) {
              
            //Use this for sending fancy embedded messages
            const embed = new MessageEmbed()
              .setColor("#EFFF00")
              .setTitle(`${temp}: Last Game Stats`)
              .addFields(
                {
                  name: "Kills",
                  value: getLastMatch.info.participants[i].kills,
                },
                {
                  name: "Deaths",
                  value: getLastMatch.info.participants[i].deaths,
                },
                {
                  name: "Assists",
                  value: getLastMatch.info.participants[i].assists,
                }
              );

            message.channel.send(embed);
          }
        }
      }
    }

    getStat();
  },
};
