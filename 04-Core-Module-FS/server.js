const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 5000;

let output = "";

const server = http.createServer((request, response) => {
  //sync --> code execute line by line
  //async --> code execute without any condition

  //Sync Way -> Read data from file.txt
  let fileContent = fs.readFileSync("./data/message.txt", "utf-8");
  //   Print(fileContent);

  //Sync Way -> Write data from file.txt
  let newFileContent = `This is new file Content ${fileContent}`;

  fs.writeFileSync("data.txt", newFileContent, "utf-8");
  //  Print("data is written to the file of Data.txt")

  // Async way --> how to Read Data from any text file

  //  fs.readFile('data.txt', 'utf-8', (err , data) => {
  //     if(err) throw err;
  //     console.log(data)
  //     Print(data)
  //  })

  // Async way --> how to Read Data from any text file

  fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) throw err;
    fs.writeFile("welcome.txt", data, "utf-8", (err) => {
      if (err) throw err;
      Print("data is written in Welcome.txt file");
    });
  });

  response.statusCode = 200;
  response.setHeader("content-type", "text/html");
  response.end(`<pre style="color: orangered">${output}</pre>`);
});

let Print = (str) => {
  output = `${str}`;
};
server.listen(port, hostname, () => {
  console.log(`Server is started at http://${hostname}:${port}`);
});
