
// require module 
const pg = require('pg');
// creation client

const client = new pg.Client(process.env.PG_URL);

// connection client 

client.connect();
// export du client

module.exports = client;