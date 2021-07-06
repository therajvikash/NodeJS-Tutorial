const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require('./appRouting/appRouting');


const hostname = '127.0.0.1';
const port = 9000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    router.routes(req, res);
});

server.listen(port, () => {
    console.log(`Server is started at http://${hostname}:${port}`);
});
