// click handler for the submit button
function click_handler()
{
alert('Congratulations, you have subscribed - check your email for confirmation');
}


// calculator code
function calculateSum(num1, num2){
    return num1 + num2;
}

function calculateSubtract(num1, num2){
    return num1 - num2;
}

function calculateDivide(num1, num2){
    return num1 / num2;
}

function calculateMultiply(num1, num2){
    return num1 * num2;
}

function calculatePower(num1, num2){
    return num1 ** num2;
}

function calculateSquareroot(num1){
    return Math.sqrt(num1);
}

// calculator function that will run when you click the button
function calculator(){
var num1 = Number(prompt("What is your first number: "));
var operation = prompt("What operation do you want to carry out? (+, -, /, *, **, sqrt");
if(operation != "sqrt"){
    var num2 = Number(prompt("What is your second number:"));
}
var result = 0;

if(operation == '+'){
    result = calculateSum(num1, num2);
}else if(operation == '-'){
    result = calculateSubtract(num1, num2);
}else if(operation == '/'){
    result = calculateDivide(num1, num2);
}else if(operation == '*'){
    result = calculateMultiply(num1, num2);
}else if(operation == '**'){
    result = calculatePower(num1, num2);
}else if(operation == 'sqrt'){
    result = calculateSquareroot(num1);
}else{
    result = "Invalid Input, please try again"
}

// if doing a square root operation you only want 1 number
if(operation == "sqrt"){
    alert(`The result of ${operation} ${num1}  is: ${result}`)
}else{
    alert(`The result of ${num1} ${operation} ${num2} is: ${result}`)
};
}