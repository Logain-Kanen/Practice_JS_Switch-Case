// Gym Membership Duration Calculator
const prompt=require('prompt-sync')(); 
let type=prompt("Enter plan type ");
let rate=prompt("Enter plan rate ");
let duration="";
let discount="";
let cost=""
let final=""
switch (type){
    case "monthly":
        duration=1;
        discount=0;
        break;
    case "quarterly":
        duration=3;
        discount=5;
        break;
    case "semi-annually":
        duration=6;
        discount=10;
        break;
    case "annually":
        duration=12;
        discount=20;
        break;
    default:
        console.log("Invalid Input");
}
cost=duration*rate;
discount=cost*(discount/100);
final=cost-discount

console.log("Original cost of $"+cost+" for "+duration+" months with a $"+discount+" discount leads to a total of "+final)