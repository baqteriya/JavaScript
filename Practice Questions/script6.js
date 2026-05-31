let str ="javascript";
let count =0;
str = str.toLowerCase();
for(let i=0;i<str.length;i++){
let ch = str.charAt(i);
if(ch == 'a' || ch == 'e'|| ch == 'i' || ch == 'o' || ch =='u'){
    count++;
}
}
console.log(count);
