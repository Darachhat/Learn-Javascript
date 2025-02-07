// Exercise 1 --------------

// const names = ["Bro", "Bruh", "Brooo", 'Bruff', 'May']

// for(let i = 0; i < 5; i++){
//     console.log(names[i],i);
// }

// for ( i = names.length; i >= 0; i--){
//     console.log(names[i],i);
// }

// Exercise 2 ---------------

const students = [
    {
        name: "Sam",
        score: 90
    },
    {
        name: "Tom",
        score: 80
    },
    {
        name: "Bob",
        score: 70
    },
    {
        name: "Alice",
        score: 60
    }
]

let i = 0
while ( i < students.length) {
    console.log("Student",students[i].name, " has ", students[i].score, "scores.");
    i++
}