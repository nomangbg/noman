//Calculator In typecript Using Terminal Input

var prompt = require("prompt-sync")();

let n1 = parseInt(prompt ("enter your third number:"));
let n2 = parseInt(prompt ("enter your forth number:"));

let operator = (prompt ("enter operator(+,-,*,/):"));

if (operator + "+"){
console.log(`the answere of ${n1} ${operator} ${n2} = ${n1+n2}`);
}

if (operator + "-"){
console.log(`the answere of ${n1} ${operator} ${n2} = ${n1+n2}`);
}

if (operator + "*"){
console.log(`the answere of ${n1} ${operator} ${n2} = ${n1+n2}`);
}

if (operator + "/"){
console.log(`the answere of ${n1} ${operator} ${n2} = ${n1+n2}`);
}else {
console.log("please select correct operator");
}

export {};

