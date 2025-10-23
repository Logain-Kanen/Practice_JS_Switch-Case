// Coffe sizing pricing
// If the size of the coffee ordered is small, medium, large, grande
// price should be assigned the value - 2.50, 3.50, 4.50, and 5.50

const prompt=require('prompt-sync')();

let coffeeSize=prompt("Order Coffee- size: ")
let price=0
switch(coffeeSize){
    case "small":
        price=2.50
        break;
    case "medium":
        price=3.50
        break;
    case "large":
        price=4.50
        break;
    case "grande":
        price-5.50
        break;
    default:
        console.log("Invalid Option")
}

console.log("Coffee Size " +coffeeSize)
console.log("Price $"+price)