const http = require("http");

const os = require("os");

const hostName = "127.0.0.1";
const port = 5000;

let output = "";

const server = http.createServer((req, res) => {
  //os module
  let totalMemory = os.totalmem();
  Print(`Total Memory = ${totalMemory}`);

  let freeMemory = os.freemem();
  Print(`Free Memory = ${freeMemory}`);

  let homeDir = os.homedir();
  Print(`Home Dir = ${homeDir}`);
  
  let hostname = os.hostname();
  Print(`HostName = ${hostname}`)
  

  res.statusCode = 200;
  res.setHeader("content-type", "text/html");
  res.end(`<pre style="color: orangered">${output}</pre>`);
});
let Print = (str) => {
  output += `${str}\n`;
};

server.listen(port, hostName, () => {
  console.log("server is started");
});
