const https = require('https');

const options = {
  protocol: 'https:',
  host: 'api.paypal.com',
  path: '/v1/payments/sale/sales_id',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer <Access-Token>'
  }
};

const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });

});

req.on('error', (e) => {
    console.error(e);
});

req.end();
