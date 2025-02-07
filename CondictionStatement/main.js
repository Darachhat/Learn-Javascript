// Condiction Statement ---------
// <> <= >= == === != !== !


const condiction = 50 <=50

const condiction1 = "HI" == "HI"

let x = "20"
let y = 20
let condiction2 = x == y // true because == dont care about type and care only value
let condiction3 = x === y // false because === care about type

let condiction4 = x != y // false because != dont care about type and care only value
let condiction5 = x !== y // true because !== care about type


if (condiction3) {
    console.log('This is true condiction.');
} 
else {
    console.log('This is false condiction.');
    
}