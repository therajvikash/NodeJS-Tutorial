const path = require('path');
const fs = require('fs');


let routes = (req, res) => {
    let requestedURL = req.url;   

    if(requestedURL === '/'){
        fs.readFile(path.join(__dirname, '..','view', 'index.html'), 'utf-8', (err , data) => {
            if(err) throw err;
            res.end(data);
        })
       
    } 

    else if(requestedURL === '/contact'){
        fs.readFile(path.join(__dirname, '..','view', 'contact.html'), 'utf-8', (err , data) => {
            if(err) throw err;
            res.end(data);
        })
    }

    else if(requestedURL === '/about'){
        fs.readFile(path.join(__dirname, '..','view', 'about.html'), 'utf-8', (err , data) => {
            if(err) throw err;
            res.end(data);
        })
    }

    else if(requestedURL === '/json'){
        fs.readFile(path.join(__dirname, '..','view', 'json.html'), 'utf-8', (err , data) => {
            if(err) throw err;
            res.end(data);
        })
    }
    else{
        fs.readFile(path.join(__dirname, '..','view', '404.html'), 'utf-8', (err , data) => {
            if(err) throw err;
            res.end(data);
        })  
    }
}


module.exports = {routes}
