for(let i =1; i <= 5; i++){
    console.log("apna collegr");
}
//Calculate sum of 1 to 5
let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log("sum = ", sum);
// used while loop
let i =1;
while(i <= 5 ){
    console.log(" i ="+ i); 
    i++;
}
//do -while loop
do{
    console.log("Apna college");
    i++;
} while( i <= 10);
//for-of Loop
let str = "ApnaCollege";
let size =0;
for(let i of str){
    console.log("i ="+i);
    size++;
}
console.log("String size ="+ size);
//for-in loop
let student={
    name: " Priya kumari ", age: 20, cgpa: 7.5, isPass : true

};
for(let key in student){
    console.log("key =",key ," value=", student[key]);
}