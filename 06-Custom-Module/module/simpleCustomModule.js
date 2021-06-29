
//declare a function
let fun_one = (name, age, salary ) => {
    console.log(`Hello ${name} your age is ${age} and Your salary is ${salary}`);
};

let fun_two = (str) => {
    let value = '';
    for (let i = str.length - 1; i >= 0; i--){
        value += str.charAt(i)
    };
    return value;
};

module.exports = {fun_one, fun_two};
