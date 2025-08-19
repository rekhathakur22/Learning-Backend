// require sql from npm
const mysql = require("mysql2");

//A collection of pre-created MySQL connections that your application reuses instead of creating new ones for every query.

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "SoftEng22@22",
  database: "roomly_web",
});

module.exports = pool.promise();
