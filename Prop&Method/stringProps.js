// String Property 

const name = " Dara chhat"
const sure = "Sothun-Dara-chhat"

console.log(name.length); // get length of string
console.log(name.toUpperCase()); // set char to uppercase
console.log(name.toLowerCase()); // set char to lowercase
console.log(name.trim()); // trim remove space "  Darachhat" => "Darachhat"
console.log(name.includes("Dara")); // check string is include in string

if(name.toLowerCase().includes("dara")){
    console.log("It's true.");
}

console.log(name.concat(" ",sure)); // concat string

console.log(name.split()); // split string  ["Dara chhat"]
console.log(name.split(" ")); // split string  ["Dara", "chhat"]
console.log(sure.split("-")); // split string 


const obj = { id: 1 }
console.log(obj.id.toString()); // convert object to string





