const sql = require('mssql')
const config = require('../config')

const dbSettings = {
    user: config.dbUser, //ronmel
    password: config.dbPassword, //sqlronmel
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true //change to true for local dev / self-signed certs
    }
}

const getConnection = async() => {
    try {
        const pool = await sql.connect(dbSettings)
        //const res = await pool.request().query('SELECT 1')
        //console.log(res)
        return pool
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getConnection, sql}