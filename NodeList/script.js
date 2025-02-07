//NodeList

const element = document.getElementsByName("code")

element.forEach(function (e) {
    console.log(e);
})

console.log(element);

const list = document.querySelectorAll(".list > .item")

list.forEach(function (e){
    console.log(list);
    
})

// ChildNode vs Children Property
const elementChild = document.querySelector("ul")

// target childNode
console.dir(elementChild.childNodes)

// target childElement
console.dir(elementChild.children)

//  target parentElement
console.log(elementChild.parentElement);

// Sibling Element

const element2 = document.querySelector('.box')
// previousSibling
console.log(element2.previousSibling); // output:

//nextSibling
console.log(element2.nextSibling); // output: 

//nextElementSibling
console.log(element2.nextElementSibling); // output:

