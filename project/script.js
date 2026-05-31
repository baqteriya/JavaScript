console.log("Hello");
alert("hello js");
//selecting with id

let heading = document.getElementById("heading");//h1
console.dir(heading);

// selecting with class
let heading2 = document.getElementsByClassName("heading2");
console.dir(heading2);
console.log(heading2);
//selecting with tag
let parahs = document.getElementsByTagName("p");
console.dir(parahs);
//query selector first
let elements = document.querySelector("p");//1st element
console.dir(elements);
// query selector all
let elementsall = document.querySelectorAll("p");//1st element
console.dir(elementsall);//nodelist
// 
let div = document.querySelector("div");
console.log(div);