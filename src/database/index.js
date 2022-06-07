const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
const connectionString = process.env.DB_STRING;


const certPath = path.join(__dirname, '../certificate/ca-certificate.crt');
const cert = fs.readFileSync(certPath).toString();

const config = {
  connectionString,
  ssl: {
    rejectUnauthorized: false,
    ca: cert,
  }
}

const pool = new Pool(config)
  
  


// const pool = new Pool({
//   connectionString: process.env.DB_STRING,
// })


module.exports = {
  query: (text, params) => pool.query(text, params),
}