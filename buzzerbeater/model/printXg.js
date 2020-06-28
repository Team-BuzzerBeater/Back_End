const pool = require('../module/db/pool');

module.exports = {
    teamList : async() => {
        var result = await pool.queryParam_None(`SELECT teamIdx, teamName FROM team`);
        return result;
    },

    player : async(teamIdx) => {
        var result = await pool.queryParam_None(`SELECT playerIdx, playerName, teamIdx From player WHERE teamIdx = ${teamIdx}`)
        return result;
    }
};