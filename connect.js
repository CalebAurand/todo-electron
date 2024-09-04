const {Client} = require('pg');
require('dotenv').config();

// window.addEventListener('DOMContentLoaded', async () => {
//     const client = new Client({
//         host: process.env.PG_HOST,
//         port: process.env.PG_PORT,
//         user: process.env.PG_USER,
//         password: process.env.PG_PASSWORD,
//         database: process.env.PG_DATABASE,
//         ssl: false,
//     });
//     console.log("running:: attempting connection")
//     await client.connect();
//     const res = await client.query('SELECT $1::text as connected', ['Connection to postgres successful!']);
//     console.log(res.rows[0].connected);

//     await client.end();
// })();

const client = new Client({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB,

});
  

client.connect();
client.query('SELECT $1::text as connected', ['Connection to postgres successful!'], (err, res)=>{
  console.log(res.rows[0].connected);
})
client.end();