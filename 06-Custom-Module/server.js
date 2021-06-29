const http= require('http');
const modules = require('./module/simpleCustomModule');
const store = require('./database/datastore');
const write = require('./database/writeToFile');




const server = http.createServer(function(req, res){
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200; // for success response
    
    
    //Simple module Data
    modules.fun_one('Vicky', 20, 50000);

    let msg = 'Welcome to nodejs custom Module';
    let revStr = modules.fun_two(msg);
    console.log(`${msg} = ${revStr}`);

    // readFile Data
    store.getAllEmployees(employees => {
        let newFile = 'user.json';
        write.WriteToFile(newFile, JSON.stringify(employees));
    });




    res.end(`Welcome to NodeJS Custom Module`);
});

server.listen(9000);
console.log(`Server is started at localhost:9000`);
