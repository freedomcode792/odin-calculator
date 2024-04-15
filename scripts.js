const output = document.querySelector("#output");

let sign = "+";
let num1 = 3;
let num2 = 6;

console.table(sign,num1,num2);

function displayResult(data, functionName){
    //output.textContent = data;
    console.log(functionName, data);
}

function add(num1 = 4, num2 = 2){
    return num1 + num2;
}

function subtract(num1 = 7, num2 = 6){ return num1-num2; }

function multiply (num1 = 3,num2 = 4) { return num1*num2; } 



function divide(num1 = 6, num2 = 3){ return num1 / num2; }




