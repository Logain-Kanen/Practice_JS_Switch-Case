//Season Finder
const prompt=require('prompt-sync')(); 
let month=prompt("Enter the month ")
let season=""
switch(month){
    case "December"||"January"||"February":
        season="Winter"
        break;
    case "March"||"April"||"May":
        season="Spring"
        break;
    case "June"||"July"||"August":
        season="Summer"
        break;
    case "September"||"October"||"November":
        season="Fall"
        break;
    default:
        console.log("Invalid input")
}
console.log("It is "+season)