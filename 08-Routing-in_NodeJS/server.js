const http = require('http');
const fs = require('fs');
const path = require('path');


const hostname = '127.0.0.1';
const port = 9000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    let requestedURL = req.url;   

    if(requestedURL === '/'){
        fs.readFile(path.join(__dirname, 'view', 'index.html'), 'utf-8', (err , data) => {
            if(err) throw err;
            res.end(data);
        })
       
    } 

    else if(requestedURL === '/contact'){
        fs.readFile(path.join(__dirname, 'view', 'contact.html'), 'utf-8', (err , data) => {
            if(err) throw err;
            res.end(data);
        })
    }

    else if(requestedURL === '/about'){
        fs.readFile(path.join(__dirname, 'view', 'about.html'), 'utf-8', (err , data) => {
            if(err) throw err;
            res.end(data);
        })
    }

    else if(requestedURL === '/json'){
        fs.readFile(path.join(__dirname, 'view', 'json.html'), 'utf-8', (err , data) => {
            if(err) throw err;
            res.end(data);
        })
    }
    else {
        fs.readFile(path.join(__dirname, 'view', '404.html'), 'utf-8', (err , data) => {
            if(err) throw err;
            res.end(data);
        })
    }

});


server.listen(port, () => {
    console.log(`Server is started at http://${hostname}:${port}`);
});
