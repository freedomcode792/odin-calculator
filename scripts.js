const outputSection = document.querySelector("#output");

const inputSection = document.querySelector("#input");

const equalityButton = document.querySelector("#equality-button");
console.log(equalityButton);

function displayResult(data, functionName){
    //output.textContent = data;
    console.log(functionName, data);
}

function add(num1 = 4, num2 = 2){ return num1 + num2; }

function subtract(num1 = 7, num2 = 6){ return num1-num2; }

function multiply (num1 = 3,num2 = 4) { return num1*num2; } 

function divide(num1 = 6, num2 = 3){ return num1 / num2; }

function operate(op, num1, num2 ){
    switch (op){
        case "+":{
            return add(num1,num2);
        }
        case "-":{
            return subtract(num1,num2);
        }
        case "*":{
            return multiply(num1,num2);
        }
        case "/":{
            return divide(num1,num2);
        }
    }
}



const operationsData = {
    operand1 : "",
    operand2 : "",
    sign : "",
    result : "",

    getCurrentOperandKey : function(){
        console.log(this.sign);
        return this.sign === "" ? "operand1" : "operand2";
    },

    checkIfDotAllowed : function (){
        const currentOperandValue = this[this.getCurrentOperandKey()];

        return currentOperandValue === "" ? false : !(currentOperandValue.includes("."));
    },

    appendNumberOrDot : function (char){
        console.log("append ", char);
        this[this.getCurrentOperandKey()] += char;
    },



    removeLastChar : function (){
        
            if (this.operand1) {
                if (this.sign) {
                    if(this.operand2){
                        const out2 = this.operand2.slice(0,-1);
                        console.log(`${out2}test`);
                        this.operand2 = out2;
                    } else {
                        
                        const outSign = this.sign.slice(0,-1);
                        console.log(`${outSign}test`);
                        this.sign = outSign;
                    }
                } else{
                    const op1 = this.operand1.slice(0,-1);
                    console.log(`${op1}test`);

                    this.operand1 = op1;
                    
                }

                this.displayData(inputSection);

            } else console.log("nothing to remove");
    },
    displayData : function(inputField){
        inputField.textContent = `${this.operand1} ${this.sign} ${this.operand2}`;
    },

    checkIfDotLast : function(operand){
        return operand.match(/.*\.$/) !== null;
    },
    
    checkIfSignAllowed : function(){
        const currentOperandValue = this[this.getCurrentOperandKey()];
        console.log(currentOperandValue);
        if(currentOperandValue){
            console.log("Operand Defined");
            
            if(this.getCurrentOperandKey()==="operand2"){
                console.log("Only one operation for two operands")
                return false;
            } else if(currentOperandValue.match(/.+\.$/)){
                console.log("Finish filling in the decimals");
                return false;
            } else {
                return true;
            }
        } else {
            console.log("Fill in the number");
            return false;
        }
    },

    checkIfCanOperate : function(){
        if(!(this.sign)){
            console.log("No operation chosen");
            return false;
        } else if(!(this.operand1)||!(this.operand2)){
            console.log("Fill in two operands");
            return false;
        } else if (this.checkIfDotLast(this.operand2)){
            console.log("Fill in the decimals");
            return false;
        } else return true;
    },

    
    /*
        if(a digit button is pressed){
            if(there is answer present){
                empty operands
                empty answer
                empty sign
                add the button value
            }
        }

        if (a sign button is pressed){
            if(there is answer present){
                equate the first operand to answer
                empty second operand
                empty answer
                set the sign to the newly chosen value
            }
        }
    */  

}
const numpadButtons = document.querySelectorAll(".digit-button");
const dotButton = document.querySelector("#dot-button");
const signButtons = document.querySelectorAll(".sign-button");
const removeButton = document.querySelector("#remove-button");


dotButton.addEventListener("click", function(){
    if (operationsData.checkIfDotAllowed()){
        displayInput(this.dataset.value);
    operationsData.appendNumberOrDot(this.dataset.value);
    }
});

signButtons.forEach(function(signButton){
    signButton.addEventListener("click", function(){
        
        if(operationsData.result){
            operationsData.operand1 = operationsData.result;
            operationsData.operand2 = operationsData.result = "";
            inputSection.textContent = operationsData.operand1;
            outputSection.textContent = "";
            inputSection.textContent+=this.dataset.value;
            operationsData.sign = this.dataset.value;
        } else if(operationsData.checkIfSignAllowed()){
            operationsData.sign = this.dataset.value;
            inputSection.textContent+=this.dataset.value;
        }
    });
});

numpadButtons.forEach(function (numButton){
    numButton.addEventListener("click", function(){

            if(operationsData.result){
                console.log('****');
                operationsData.operand1 = operationsData.operand2 = operationsData.result = operationsData.sign = "";
                inputSection.textContent = outputSection.textContent = "";
            }

        displayInput(this.dataset.value);
        operationsData.appendNumberOrDot(this.dataset.value);
    })
});
        
equalityButton.addEventListener("click", function(){
    [operator, op1, op2] = [operationsData.sign, operationsData.operand1, operationsData.operand2];
    if(operationsData.checkIfCanOperate()){
        outputSection.textContent = operationsData.result = operate(operator, parseFloat(op1), parseFloat(op2));
    }
    
});

removeButton.addEventListener("click", function(){
    operationsData.removeLastChar();
});



function displayInput(charInput){
    if(inputSection.textContent.match(/[a-z]/i)){
        inputSection.textContent = "";
    }
    
    inputSection.textContent += charInput;
    console.log(`${inputSection.textContent}test`);
}


