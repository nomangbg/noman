"use strict";
//Calculator In typecript Using Terminal Input
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var n1 = parseInt(prompt("enter your third number:"));
var n2 = parseInt(prompt("enter your forth number:"));
var operator = (prompt("enter operator(+,-,*,/):"));
if (operator + "+") {
    console.log("the answere of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
if (operator + "-") {
    console.log("the answere of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
if (operator + "*") {
    console.log("the answere of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
if (operator + "/") {
    console.log("the answere of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
else {
    console.log("please select correct operator");
}
