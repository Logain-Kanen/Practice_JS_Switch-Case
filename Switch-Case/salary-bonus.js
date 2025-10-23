// Salary Bonus Calculator
const prompt=require('prompt-sync')(); 
level=prompt("Enter employee level ");
salary=prompt("Enter your salary ");
let bonusPerc=""
switch (level){
    case ("junior"):
        bonusPerc=0.05
        break;
    case ("mid"):
        bonusPerc=0.10
        break;
    case ("senior"):
        bonusPerc=0.15
        break;
    case ("lead"):
        bonusPerc=0.20
        break;
    default:
        console.log("Invalid input")
}
let bonus=salary*bonusPerc
let total=bonus+salary

console.log(level+" "+salary+" "+bonusPerc+" "+total)
