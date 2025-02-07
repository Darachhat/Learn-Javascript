const head = document.getElementById("head")
console.log(head);

// select query by tag with "li"
const element = document.querySelector("li") 
console.log(element);


// select query by class wth "."
const classes = document.querySelector(".contact") 
console.log(classes);

// select query by id with "#"
const id = document.querySelector("#head") 
console.log(id);

//select query by class to first-child
const ctc = document.querySelector(".list :first-child") 
console.log("select query by class to first-child ",ctc);

//select query by class to last-child
const ltc = document.querySelector(".list :last-child") 
console.log("select query by class to last-child ",ltc);

// select query by class to nth-child
const ntc = document.querySelector(".list :nth-child(2)") 
console.log("select query by class to nth-child ",ntc);

// select query by class to nth-child with odd number will display first odd number
const odd = document.querySelector(".list :nth-child(odd)") 
console.log("select query by class to odd-child ",odd);

// select query by class to nth-child with even number will display first even number
const even = document.querySelector(".list :nth-child(even)") 
console.log("select query by class to even-child ",even);