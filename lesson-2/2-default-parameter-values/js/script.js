// function printMessage(message){
//     // i want to check if there is no message
//     //then i want to assign text this message if it does not exist
//     //i want to console.log the message
//     if (!message){
//         message = "no value is here";
//     } 
//     console.log(message)
// }

// printMessage();

// default value for the property argument


function printMessage(message = "No value is here"){ //Same as the code over, but here the default value is shown after the argument
console.log(message)
}

printMessage();



// example 3

function getSum(numA = 0, numB = 0){
    return numA + numB;
}
const totalSum = getSum(10, 20) 

console.log(totalSum)