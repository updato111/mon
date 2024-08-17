const express = require('express');
const request = require('request');
const app = express();

app.use(express.json());

app.post('/proxy', (req, res) => {
    const url = 'https://api.monkey-cost.app/v1/init'; // Your target API URL
    req.pipe(request({ url, method: 'POST', json: req.body })).pipe(res);
});

app.listen(3000, () => {
    console.log('Proxy server running on http://localhost:3000');
});
