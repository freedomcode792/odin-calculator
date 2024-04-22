const outputSection = document.querySelector("#output");

const inputSection = document.querySelector("#input");

// let sign = "+";
// let num1 = 3;
// let num2 = 6;

// console.table(sign,num1,num2);

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

    getCurrentOperandKey : function(){
        return this.sign === "" ? "operand1" : "operand2";
    },

    checkIfDotAllowed : function (){
        const currentOperandValue = this[this.getCurrentOperandKey()];

        return currentOperandValue === "" ? false : !(currentOperandValue.includes("."));
    },

    appendNumberOrDot : function (char){
        this[this.getCurrentOperandKey()] += char;
    },

    removeChar : function (){

    },
    
    signAllowed : function(){
        
    },

    // dotIsAllowed : function(){
    //     if(sign){
    //         if (this.operand2){
    //             return !(this.operand1.match(/[.]/));
    //         } else {
    //             return false;
    //         }
    //     } else if (!sign){
    //         if (this.operand1){
    //             return !(this.operand2.match(/[.]/));
    //         } else {
    //             return false;
    //         }
    //     }
    // }

    

}
const numpadButtons = document.querySelectorAll(".digit-button");
const dotButton = document.querySelector("#dot-button");
const signButtons = document.querySelectorAll("sign-button");

dotButton.addEventListener("click", function(){
    displayInput(this.dataset.value);
    operationsData.appendNumberOrDot(this.dataset.value);
});

signButtons.forEach(function(signButton){
    signButton.addEventListener("click", function(){

    });
});

numpadButtons.forEach(function (numButton){
    numButton.addEventListener("click", function(){
        displayInput(this.dataset.value);
        operationsData.appendNumberOrDot(this.dataset.value);
    })
});
        



function displayInput(charInput){
    if(inputSection.textContent.match(/[a-z]/i)){
        inputSection.textContent = "";
    }
    inputSection.textContent += charInput;
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

It should work like so:
        1. The user presses number buttons and types the first operand {
            - Operands should be typed digit by digit
            - Each digit has to be added to the data object {
                  - The digit has to be added to the appropriate operand1 {
                        - if a sign hasn't been pressed -> add digit to operand1
                        - if a sign is pressed -> add digit to operand2
                    }
                  - There has to be a check to verify if it's really a digit {
                        - It will probably be appropriate to put all methods related 
                        to data addition, manipulation and checks into the Data object.
                    }
              }
            - Each new digit should be added to the Input section
        }

        2. The user presses a sign and the first number is complete. The second number starts
        3. The user types in the second operand until them press OPERATE (=) sign
        4. The expression is calculated and the result is displayed in the output section

*/      



