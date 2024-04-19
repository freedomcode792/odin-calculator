const outputSection = document.querySelector("#output");

const inputSection = document.querySelector("#input");

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

function operate(op, num1, num2 ){

}



const operationsData = {
    operand1 : "",
    operand2 : "",
    sign : "",
    appendNumber : function (char){
        if(!sign){
            this.operand1 += char;
        } else if (sign){
            this.operand2 += char;
        }
    }
}
const numpadButtons = document.querySelectorAll(".digit-button");

numpadButtons.forEach(function (numButton){
    numButton.addEventListener("click", function(){
        displayInput(this.dataset.value);
    })});
        
        

function checkInput(){

}

function displayInput(charInput){
    if(inputSection.textContent.match(/[a-z]/i)){
        inputSection.textContent = "";
    }
    inputSection.textContent += charInput;
}

function checkSign(currentCharInput){
    if(1){}
}

/*
    Break the process into components
        1. digit buttons {
            1) Make the number pressed appear in the input
            2) Append the number pressed into object {
                1) if sign symbol is defined -> append to the second operand
                2) if sign isn't defined -> append to the first operand
            }
            3) Add the possibility to press a sign {
                1) if there is no number before the sign -> display error
                2) if there is a sign already defined -> display error
                3) if there a number before the sign and no sign is defined -> add sign to the input
                4) add sign to the object
            }
            

        }
*/      



