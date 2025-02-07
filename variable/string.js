// String
// with single quote
const txt = 'Ok May';

// const spec = 'I'm am a teacher'; // Error
// with double quote
const spec = "I'm am a teacher";

// ការតភ្ជាប់​ String
const name = "Darachhat";
const job = "Software Developer";
const full = name + " is a " + job; // Concat
const text = `My name is ${name} and I am is a ${job}` // Template

console.log(full); // Darachhat is a Software Developer
console.log(text); // My name is Darachhat and I am is a Software Developer

// String length is length of string
const len = name.length;
console.log(len); // 9

// String index is index of string
const index = name[0];
console.log(index); // D

// String slice is cut string
const slice = name.slice(0, 4); 
console.log(slice); // Dara

// String replace is replace string
const replace = name.replace("Darachhat", "DARACHHAT")
console.log(replace);  // DARACHHAT

// String split is convert string to array
const split = name.split(" ")
console.log(split); // ['Darachhat']

// String toUpperCase is convert string to uppercase
const upper = name.toUpperCase()
console.log(upper); // DARACHHAT

// String toLowerCase is convert string to lowercase
const lower = name.toLowerCase()
console.log(lower); // darachhat

// String charAt is get character of string
const char = name.charAt(0)
console.log(char); // D

// String indexOf is get index of string
const index1 = name.indexOf("a")
console.log(index1); // 1

// String lastIndexOf is get last index of string
const index2 = name.lastIndexOf("a")
console.log(index2); // 7

// String concat is concat string
const concat = name.concat(" is a teacher")
console.log(concat); // Darachhat is a teacher

// String trim is trim string
const trim = name.trim
console.log(trim); // Darachhat

// String padStart is pad string បង្រ្កប់ខាងដើម String with "!""
const pad = name.padStart(15, "!")
console.log(pad); // !!!!!!Darachhat

// String padEnd is pad string បង្រ្កប់ខាងចុង String with "!""
const pad1 = name.padEnd(15, "!")
console.log(pad1); // Darachhat!!!!!!

// String repeat is repeat string
const repeat = name.repeat(3)
console.log(repeat); // DarachhatDarachhatDarachhat