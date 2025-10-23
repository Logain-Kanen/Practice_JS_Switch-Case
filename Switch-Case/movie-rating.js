//Movie Rating Guide
const prompt=require('prompt-sync')();
let movieName=prompt("Enter movie name ");
let rating=prompt("Enter movie rating ");
let guideline=""
switch (rating){
    case "G":
        guideline="is safe for all ages"
        break;
    case "PG":
        guideline="is not suitable for children, parental guidance recommended"
        break;
    case "PG-13":
        guideline="is not reccomended for children under 13"
        break;
    case "R":
        guideline="requires parental guidance if under 17"
        break;
    case "NC-17":
        guideline="will not admit any under 17"
        break;
    default:
        console.log("Invalid input")
}
console.log("The movie " +movieName +" "+guideline)