// print even no
for(let i =0; i <= 100;i++){
    if(i%2 == 0){

    
        console.log("i ="+ i);
    }
}
//practice q2
let gameNum = 25;
let userNum = prompt("Guess the game number : ");
while(userNum != gameNum){
    userNum = prompt("you entered wrong number.Guess again : ");

}
console.log("Congratulations, you entered the right number");