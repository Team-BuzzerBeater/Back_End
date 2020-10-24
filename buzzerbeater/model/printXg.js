const pool = require('../module/db/pool');

module.exports = {
    teamList : async() => {
        var result = await pool.queryParam_None(`SELECT teamIdx, teamName FROM team`);
        return result;
    },

    playerList : async() => {
        var result = await pool.queryParam_None(`SELECT playerIdx, playerName, goals, teamIdx FROM player`);
        return result;
    },

    player : async(teamIdx) => {
        var result = await pool.queryParam_None(`SELECT playerIdx, playerName, goals, teamIdx FROM player WHERE teamIdx = ${teamIdx}`)
        return result;
    },

    shooting : async(playerIdx) => {
        // var playerIdx = await pool.queryParam_None(`SELECT playerIdx FROM player WHERE playerName = ${playerName}`)
        var result = await pool.queryParam_None(`SELECT shootIdx, positionX, positionY, xG, ourTeam, enemyTeam, isHome, result FROM shootings WHERE playerIdx = ${playerIdx}`)
        return result;
    },

    profile : async(playerIdx) => {
        var result = await pool.queryParam_None(`SELECT playerName, goals, teamIdx, hight, weight, birth FROM player WHERE playerIdx = ${playerIdx}`)
        return result;
    }
};