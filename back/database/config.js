const mysql = require("mysql")


const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "Chuca2245",
    database: "login"

})

module.exports = { db }