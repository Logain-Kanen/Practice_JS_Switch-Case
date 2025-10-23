// Shipping Cost Calculator
const prompt=require('prompt-sync')(); 
let zone=prompt("Enter shipping zone ");
let pound=parseInt(prompt("Enter package weight in lbs "));
let rate=""
switch (zone){
    case "local":
        rate=2.5
        break;
    case "regional":
        rate=3.5
        break;
    case "national":
        rate=5
        break;
    case "international":
        rate=10
        break;
    default:
        console.log("Invalid input")
}
let cost=rate*pound
console.log("Shipping to "+zone+" with "+pound+" lbs at a rate of "+rate+" will cost $"+cost.toFixed(2))