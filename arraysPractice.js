let marks =[85,97,44,37,76,60];
let sum =0;
for(let val of marks){
    sum = sum +val;
}
let average = sum / marks.length;
console.log(`avg marks of the class= ${average}`);


//new question
//for of loop
let items =[250,645,300,900,50];
let i=0;
for(let val of items){
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer=${items[i]}`);
    i++;
}
//    // for loop
//    for(let i=0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
//    }
// console.loglog(items);




// push
let foodItems = ["potato", "tomato","apple"];
// foodItems.push("burger","panner","chips");
console.log(foodItems);
//pop
foodItems.pop();
console.log(foodItems);
//toString
console.log(foodItems.toString());
//Concat
let marvelheroes =["thor","spiderman","ironman"];
let dcheroes =["superman","badman"];
let heroes = marvelheroes.concat(dcheroes);
console.log(heroes);
//unshift
let animals =["lion","cat","dog"];
animals.unshift("horse");
console.log(animals);
//shift
let fruits =["mango","Apple","graphs"];
let val = fruits.shift();
console.log("deleted", val);
//slice
let vegie =["potato","tomato","carrot","pumkin","beans"];
console.log(vegie);
console.log(vegie.slice(1,3));
//spilce
let arr = [1,2,3,4,5,6,7];
//arr.splice(2,2,102,103);
//add element
//arr.splice(2,0,101);
//delete element
//arr.splice(3,1);
//Replace element
arr.splice(3,1,101);