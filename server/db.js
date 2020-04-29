const Pool = require("pg").Pool;

let secrets;
if (process.env.NODE_ENV == "production") {
  secrets = process.env; // in prod the secrets are environment variables
} else {
  secrets = require("./secrets"); // in dev they are in secrets.json which is listed in .gitignore
}

const pool = new Pool({
  user: secrets.USER,
  password: secrets.PASSWORD,
  port: 5432,
  database: secrets.DATABASE
});

module.exports = pool;
