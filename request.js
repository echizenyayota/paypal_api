const https = require('https');

const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

});

req.on('error', (e) => {

});

req.end();
