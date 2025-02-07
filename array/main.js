// Array ===================]


const oldUser = ["Dara","Kanha","Raj"]
const user  = ["Dara","Kanha","Raj","May", oldUser]
user[2] = "Rahhul"


console.log(user); // ['Dara','Kanha','Raj','May', [ 'Dara', 'Kanha', 'Raj' ]]
console.log(user[0]); // Dara is output of array index 0
