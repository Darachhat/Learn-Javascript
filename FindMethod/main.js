const user = [
    {
        name: "Sovann",
        age: 19,
        role: "Admin"
    },
    {
        name: "May",
        age: 19,
        role: "Admin"
    },{
        name: "Dara",
        age: 19,
        role: "Admin"
    },
    {
        name: "Heng",
        age: 19,
        role: "Admin"
    }
]

const name = ["Heng", "Sok"]

const finding = name.find(function (item){
    return item === "Heng"
})

console.log(finding);
