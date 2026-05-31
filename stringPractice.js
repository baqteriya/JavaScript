// create string
let str = "ApnaCollege";
console .log(str);
// string length
console.log(str.length);
//string index
console.log(str[0],str[1]);

let obj = {

    item : "pen",
    price : 10,

};
console.log("the cost of", obj.item, "is", obj.price,"rupees");
//Template Literals
let specialString = `This is a template literal ${1+2+3}`;
console.log( specialString);
//string interPolation
let output=`the cost of $(obj.item) is $(obj.price)rupees`;
console.log(output);
//next line
console.log("Apna \n college");
// Tal space
console.log("Apna \t college");
//UperCase

str = str.toUpperCase();
console.log(str);
//lowerCase
str = str.toLowerCase();
console.log(str);
// whiteSpaces removes
let str1 ="       Hello world   ";
console.log(str1.trim());
// return part of string
let str2 = "0123456789";
console.log(str2.slice(1, 6));
// join two string
let str3 ="apna";
let str4 = "college";
let res = str3.concat(str4);
console.log(res);
//searchVal,newVal
let str5 = "hello";
console.log(str5.replace("h","y"));
//idx char find
let str6 = "ILoveJs";
console.log(str6.charAt(2));
