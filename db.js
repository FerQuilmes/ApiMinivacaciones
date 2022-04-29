const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST || secrets.DATABASE_HOST,
  user: process.env.DATABASE_USER || secrets.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD || secrets.DATABASE_PASSWORD,
  database: process.env.DATABASE || secrets.DATABASE,
  ssl  : {
    // DO NOT DO THIS
    // set up your ca correctly to trust the connection
    rejectUnauthorized: false
  }
});


module.exports = {
  db
}