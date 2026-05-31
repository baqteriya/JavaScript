let newButton = document.createElement("button");
newButton.innerText = "click me!";

newButton.style.color="white";
newButton.style.backgroundColor="pink";
document.querySelector("body").prepend(newButton);
//q2
let para = document.querySelector("p");
para.classList.add("newClass");
