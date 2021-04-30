const queryString = require("querystring");
const fetch = require("node-fetch");
// const { leagueKey } = require('~/config.json');
const { MessageEmbed } = require("discord.js");
const server = require('../../server');

module.exports = {
  name: "test",
  description: "Fetch last game of specified summoner name.",

  execute(message, args) {

    function convertToPoints(kills,deaths,assists,minions,vision){

      let KILLS = kills*5;
      // console.log(KILLS);
      let DEATHS = deaths*-1;
      // console.log(DEATHS);
      let ASSISTS = assists*3;
      // console.log(ASSISTS);
      let MINIONS = Math.floor(minions/5);
      // console.log(MINIONS);
      let VISION = Math.floor((vision/5)*2);
      // console.log(VISION);

      return (KILLS+DEATHS+ASSISTS+MINIONS+VISION)*calculateMultiplier();
  }

  function calculateMultiplier(){
      let multiplier = 1;
      return multiplier;
  }

  async function getStat() {

      //Looping through all names entered
      for (let i = 0; i < args.length; i++) {

        //Storing current summoner name
        let temp = args[i];
        let currentSummoner = args[i].toLowerCase();

        //Accommodating for special character names
        if(currentSummoner === "summoner1"){
          currentSummoner = "Summ%C3%B8ner1";
        }else if(currentSummoner === "vaynesthighs"){
          currentSummoner = "VaynesTh%C3%ADghs";
        }else if(currentSummoner === "nice"){
          currentSummoner = "n%C4%B1ce";
        }

        //getting the puuid
        const query = queryString.stringify({ term: args.join(" ") });
        const getPuuid = await fetch(
          `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${currentSummoner}?api_key=RGAPI-77e3ceac-9c27-4cdb-9092-1db39c3fda05`
        ).then((response) => response.json());

        //getting match id
        const getMatchid = await fetch(
          `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${getPuuid.puuid}/ids?start=0&count=1&api_key=RGAPI-77e3ceac-9c27-4cdb-9092-1db39c3fda05`
        ).then((response) => response.json());

        //getting a match
        const getLastMatch = await fetch(
          `https://americas.api.riotgames.com/lol/match/v5/matches/${getMatchid[0]}?api_key=RGAPI-77e3ceac-9c27-4cdb-9092-1db39c3fda05`
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

            server.pointToXP(temp, convertToPoints(
              getLastMatch.info.participants[i].kills,
              getLastMatch.info.participants[i].deaths,
              getLastMatch.info.participants[i].assists,
              getLastMatch.info.participants[i].totalMinionsKilled,
              getLastMatch.info.participants[i].visionScore), message );
          }
        }
      }
    }

    getStat();
  },
};
