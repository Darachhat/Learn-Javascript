// True & False
// "" empty string, 0, null, undefined, NaN => (false)

const name = "";
if (name) {
    console.log("True");
} else {
     console.log("False"); // output False
}

const num = 0
if (num) {
    console.log("True");
} else {
     console.log("False"); // output False
}

const car = null
if (car) {
    console.log("True");
} else {
     console.log("False", car); // output False
}

const user = undefined
if (user) {
    console.log("True");
} else {
     console.log("False", user); // output False
}

const sum = "20" * 2
if (sum) {
    console.log("True");
} else {
     console.log("False", sum); // output False
}