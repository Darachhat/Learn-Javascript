
const salary = [300, 400, 500, 100]

// a = 0; currentValue = 300 => 300
// a = 300; currentValue = 400 => 700
// a = 700; currentValue = 500 => 1200
// a = 1200; currentValue = 100 => 1300

// reduce method ----------------------------

const totalSalary = salary.reduce((ac, currrentValue)=>{
    return ac + currrentValue
}, 0)

console.log(totalSalary);

let total = 0

for (let i = 0; i < salary.length; i++) {
    total += salary[i]
}

console.log(total); // 1300

// reduce method more

const name = ["Sovann", "May", "Dara", "Heng"]


// default
let fullName = "";
name.forEach(function (item) {
    fullName += item + " "
});
console.log(fullName);

// reduce 
const fullname2 = name.reduce( function (ac, cr){
    return ac + cr + " "
}, "")
console.log(fullname2);

