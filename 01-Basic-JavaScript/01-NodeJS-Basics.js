// Variable Declaration in NodeJS

let course = "NodeJS"
console.log('Course = ' + course) //ES5 string concat operator 
console.log(` course = ${course}`) //ES6  template string/ backtick operator 

// create an object
let employees = {
    name: "Vicky",
    email: "vicky@gmail.com",
    company : "TCS",
    location:"india",
};

console.log(employees);

// Create an array
let products = ["TV", "Refrigrator", "Washing Machine", "Mobile"];
console.log(products);


// create a fxn 

let fun_one = (value) => {
        let msg = `Hello : ${value}`;
        console.log(msg);
}
fun_one("vicky")