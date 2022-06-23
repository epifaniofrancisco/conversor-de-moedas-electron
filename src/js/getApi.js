//import { isConnect } from "./isConnect.js";

const https = require('https');

const options = {
  hostname: 'https://v6.exchangerate-api.com/v6/28197f69941ed36e7787fc47/latest/USD',
  port: 443,
  method: 'GET',
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
