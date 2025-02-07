// Arrays Property & Method

const user = [ "Da", "Saaa", "Kaka" ]
const oldUser = ["Dara","Kanha","Raj"]

console.log("User: ", user);


// add element to start of array
user.unshift("May") 
console.log("User after unshift ",user);

// remove element from start of array
user.shift()
console.log("User after shift ",user);


// add element to end of array
user.push("Rahul") 
console.log("User after push ",user);


// remove element from end of array
user.pop()
console.log("User after pop ",user);

// add element to middle of array
const sliceUser = user.slice(1)
console.log("User after slice ",sliceUser); // ["Kaka"]

const spliceUser = user.splice(1,2,"Bruh")
console.log("User after splice ",spliceUser); // ["Kaka"]

// reverse array
const revUser = user.reverse()
console.log("User after reverse ",revUser);


