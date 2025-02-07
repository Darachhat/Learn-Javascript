// Rule for variable name

// var 2n = "Darachhat" // Cannot start with number
// var -n = "Darachhat" // Cannot start with -+=/_
// var if = "Darachhat" // Cannot start with keyword

var myName = "Darachhat" // can start camelCase
var my_name = "Darachhat" // can start underscore


// Var Let Const 

// Let Const are block scope

// Let can reassign
if (true) {
    let num = 0
    if (true) {
        console.log(num);
    } // 0
}
// console.log(num); // ReferenceError: num is not defined
let n = 20
console.log(n); // 20
n = 50
console.log(n); // 50 can reassign

// Const cannot reassign
if (true) {
    const num = 0
    if (true) {
        console.log(num);
    } // 0

}

const num = 20
console.log(num); // 20
// num = 50 // TypeError: Assignment to constant variable

// Var can reassign and function scope
if (true) {
    var nums = 5
    if (true) {
        var nums = 0
        console.log(nums);
    } // 0
}
console.log(nums); // 0