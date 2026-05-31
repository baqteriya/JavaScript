function myFunction(){
    console.log("welcome java");
    console.log("Hello java");

}
myFunction();
//parameter
function paramFunction(msg){
    console.log(msg);
}
paramFunction(" I love js");//argument
//function 2 number sum
function sum(a,b){
    console.log(a + b);
}
sum(2,3);
//multiplication function
function mul(a,b){
    return a*b;
}
let arrowMul=(a,b) =>{
    return a*b;
};
const ptintHello = () => {
    console.log("hello");
};
//vowels
function CountVowels(str){
    let count =0;
    for(const char of str){
        if(char == "a" || char == 'e' || char == "i" || char == '"o' || char == "u"){
            count++;
        }
    }
        return count;

    }
    const countVow=(str)=>{
        let count =0;
    for(const char of str){
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
            count++;
        }
    }
        return count;

    };


// forEach
let arr = [1,2,3,4,5];
arr.forEach((val,idx,arr) => {
console.log(val,idx,arr);
});
//practice square fun
let nums =[1,2,3,4];
nums.forEach((num)=>{
    console.log(num * num);
});
//map
nums.map((val)=>{
    console.log(val);
});
//filter
let newArr = [1,2,3,4,5,6,7];
let evenArr = arr.filter((val)=>{
    return val % 2 === 0;
});
console.log(evenArr);
//reduce
let arrReduce =[1,2,3,4];
const output = arr.reduce((res,curr)=>{
    return res + curr;
});
console.log(output);