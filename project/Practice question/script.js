let h2 = document.querySelector("h2");
console.log(h2.innerText);
h2.innerText =h2.innerText + " from Apna college students";
let divs = document.querySelectorAll(".box");
console.log(divs);
divs[0].innerText="unique value 1";
//inser element
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);
let div =document.querySelector("div");
div.prepend(newBtn);
let p=document.querySelector("p");
p.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHtml = "<i>Hi, i am new!</i>";
document.querySelector("body").prepend(newHeading);