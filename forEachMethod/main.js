// Array Method ------------------------

const names = ["Bro", "Bruh", "Brooo", 'Bruff', 'May']

console.log("For Loop method: ");
for(let i = 0; i < names.length; i++){
    console.log(names[i]);   
}

console.log("forEach method 1: ");

function eachItem(item){
    console.log(item);
}
names.forEach(eachItem)

console.log("forEach method 2: ");
names.forEach(function (item, index, array){
    console.log(item);
})

// custom forEach function

function myForEach(callBackFunction, array){
    for (let i = 0; i < array.length; i++){
        callBackFunction(array[i]);
    }
}

// My for Each customize function:
console.log("My forEach function customize: ");
myForEach(function (item) {
    console.log(item);
    
}, names)

Array.prototype.myForEach = function (callBackFunction){
    for (let i = 0; i < this.length; i++){
        callBackFunction(this[i]);
    }
}

names.myForEach(function (item) {
    console.log(item);
})