const http = require('http');
const fs = require('fs');
const path = require('path');


const hostname = '127.0.0.1';
const port = 9000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path.join(__dirname, 'view', 'index.html'), 'utf-8', (err , data) => {
        if (err) throw err;
        res.end(data);
    })
});


server.listen(port, () => {
    console.log(`Server is started at http://${hostname}:${port}`);
});
