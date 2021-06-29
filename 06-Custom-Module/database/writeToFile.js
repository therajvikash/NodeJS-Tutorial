const fs = require('fs');
const path = require('path');


let WriteToFile = (newFile, data) => {
    fs.writeFile(newFile, data, 'utf-8', (err) => {
        if (err) throw err;
        console.log(`Data is Store to a file call as ${newFile}`);
    });
};

module.exports = {WriteToFile}