const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 5000;

let output = "";

const server = http.createServer((request, response) => {
  // fs.readFile(
  //   path.join(__dirname,  "data", "message.txt"),
  //   "utf-8",
  //   (err, data) => {
  //     if (err) throw err;
  //     fs.writeFile(path.join(__dirname, 'data' , 'data.txt' ) , data, 'utf-8', (err) => {
  //       if (err) throw err;
  //       Print("data is written")
  //     })
  //   }
  // );

  // Programes file
  fs.readFile(path.join(__dirname, "server.js"), "utf-8", (err, data) => {
    if (err) throw err;
    fs.writeFile(
      path.join(__dirname, "program", "app.js"),
      data,
      "utf-8",
      (err) => {
        if (err) throw err;
        Print("data is written");
      }
    );
  });

  // JSON file with content

  let employees = [
    {
      id: 1,
      first_name: "Tobye",
      last_name: "Lutz",
      email: "tlutz0@archive.org",
      gender: "Agender",
      ip_address: "167.194.160.239",
    },
    {
      id: 2,
      first_name: "Gifford",
      last_name: "Huskinson",
      email: "ghuskinson1@eventbrite.com",
      gender: "Agender",
      ip_address: "58.243.15.72",
    },
    {
      id: 3,
      first_name: "Powell",
      last_name: "Coy",
      email: "pcoy2@redcross.org",
      gender: "Polygender",
      ip_address: "102.100.76.76",
    },
    {
      id: 4,
      first_name: "Garrek",
      last_name: "Catlow",
      email: "gcatlow3@epa.gov",
      gender: "Non-binary",
      ip_address: "125.168.24.104",
    },
    {
      id: 5,
      first_name: "Antonella",
      last_name: "Dudding",
      email: "adudding4@myspace.com",
      gender: "Bigender",
      ip_address: "4.70.35.49",
    },
    {
      id: 6,
      first_name: "Betsy",
      last_name: "Walcot",
      email: "bwalcot5@linkedin.com",
      gender: "Female",
      ip_address: "28.146.116.187",
    },
    {
      id: 7,
      first_name: "Shanie",
      last_name: "Klulicek",
      email: "sklulicek6@telegraph.co.uk",
      gender: "Genderfluid",
      ip_address: "87.149.242.186",
    },
    {
      id: 8,
      first_name: "Roma",
      last_name: "Hubery",
      email: "rhubery7@wisc.edu",
      gender: "Female",
      ip_address: "92.143.4.143",
    },
    {
      id: 9,
      first_name: "Deni",
      last_name: "Mardell",
      email: "dmardell8@sourceforge.net",
      gender: "Bigender",
      ip_address: "252.145.30.84",
    },
    {
      id: 10,
      first_name: "Raymond",
      last_name: "Dumblton",
      email: "rdumblton9@army.mil",
      gender: "Female",
      ip_address: "216.162.115.144",
    },
  ];

  fs.writeFile(
    "./json/employees.json",
    JSON.stringify(employees),
    "utf-8",
    (err) => {
      if (err) throw err;
      Print("JSon Data is Written in employees.json");
    }
  );

  // read from JSON File
  fs.readFile("employees.json", "utf-8", (err, data) => {
    if (err) throw err;
    let employees = JSON.parse(data);
    console.log(employees);
  });

  response.statusCode = 200;
  response.setHeader("content-type", "text/html");
  response.end(`<pre style="color: orangered">${output}</pre>`);
});

let Print = (str) => {
  output += `${str}`;
};
server.listen(port, hostname, () => {
  console.log(`Server is started at http://${hostname}:${port}`);
});
