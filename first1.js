console.log("Hello java");
//Artimetic operators
let a=5;
let b=2;
console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b =" , a - b);
console.log(" a * b =" , a * b);
console.log(" a / b =", a / b);
console.log("a % b =" , a % b);
console.log(" a ** b = ", a ** b);
//unary operator
a ++;//post increment
console.log(a);//6
a--;//post decrement
console.log(a);//5
++ a;//pre increment
console.log(a);//6
--a;//pre decrement
console.log(a);//5
//Assignment operators
a +=  1;//a= a+1
console.log("a = ", a);
a **= 4;// a = a ** 4
console.log("a = ", a);
//Comparison operators
console.log(" a == b :", a == b);//false
console.log( " a != b :", a != b); //true
console.log(" 5 > 2", a > b);
// Logical operators
let cond1 = a > b; // true
let cond2 = a === 5 // true
console.log ( "cond1 && cond2= ", cond1 && cond2);
console.log("cod1 || cond2 =", a<b || a === 5);
// Conditional statements
let age =25;
if(age >= 18){
    console.log("you can vote");
}
if(age < 18){
    console.log("you CANNOT vote");
}
let mode = "dark";
let color;
if( mode === "dark"){
    color = "black";
}
if(mode == "light"){
    color ="white";
}
console.log(color);
// Ternary OPerators
 let result = age >= 18 ? "adult": "not adult";
console.log(result);