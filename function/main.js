// Function -----------
function myfunc(){
    let  x = 20;
    let y = 30;
    let result = x + y;
    return result
    
}

const result = myfunc();
console.log(result); // 50
console.log(myfunc()); // 50

function greeting(name = "Guest") {
    console.log(`Hello ${name}, welcome to our community`);
}

greeting("Darachhat"); // Hello Darachhat, welcome to our community
greeting(); // Hello Guest, welcome to our community