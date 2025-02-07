// get element by tag name
const elements = document.getElementsByTagName("li")

const spreedElements = [...elements] // spread element

spreedElements.forEach( function (element){
    console.log(element);
    
});

// get element by class name
const classes = document.getElementsByClassName("item")

const spreedClasses = [...classes] // spread class

spreedClasses.forEach( function (element){
    console.log(element);
    
});