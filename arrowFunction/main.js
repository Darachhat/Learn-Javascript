// Arrow Function -----

const greeting = (name = "Guest") => {
    return `Hello ${name}, welcome to our community`;
}
console.log(greeting("Darachhat"));

const greetingMay = name => `Hello ${name} Welcome to our community`;
console.log(greetingMay("May"));