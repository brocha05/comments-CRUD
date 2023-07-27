const { Pool } = require("pg");
const {dba} = require('./config')

const db = new Pool({
  user: dba.user,
  password: dba.password,
  host: dba.host,
  port: dba.port,
  database: dba.database,
});

module.exports = db;