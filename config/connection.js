const Sequelize = require("sequelize");
require("dotenv").config();
let db;

if (process.env.JAWSDB_URL) {
  db = new Sequelize(process.env.JAWSDB_URL);
} else {
  db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = db;