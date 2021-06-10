//how to create server in NodeJS
// --> import http module which is by default present in nodejs
// --> this module is predefined or core module in nodejs 
 // const http = require('http');
 const http = require('http');


 const hostName = "127.0.0.1";
 const port = 5000;

 const server = http.createServer((request , response) => {
        response.statusCode = 200;
        response.setHeader('content-type', 'text/html')
        response.end(`<h2>Welcome to Node JS Server Creation</h2>`)
 })


 server.listen(port, hostName, () => {
     console.log(`NodeJS Server Started At http://${hostName}:${port}`);
 })
  