const pool = require('../module/db/pool');

module.exports = {
    teamList : async() => {
        var result = await pool.queryParam_None(`SELECT * FROM team`);
        return result;
    }
};