const mysql = require('promise-mysql')

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE, // insert db name
    dateStrings: process.env.DB_DATESTRINGS,
}

module.exports = mysql.createPool(dbConfig)