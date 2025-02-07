// Function -----
function sum(){
    let x = 10;
    let y = 20;
    return x + y
}
console.log("Result of sum() is " + sum()); // 30

function sumswithparameter(x,y){ // x , y are parameter
    return x + y 
}
console.log("Result of sums(10,20) is " + sumswithparameter(10,20)); // 30

function greetingMay(name){
    return `Hello ${name} Welcome to our community`
}
console.log(greetingMay("May"));
