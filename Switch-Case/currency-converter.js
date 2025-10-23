// Currency Converter
const prompt=require('prompt-sync')();
let usd=parseInt(prompt("Enter amount in USD "));
let target=prompt("Enter target currency ");
let rate=""
switch (target){
    case "EUR":
        rate=0.93
        sign="€"
        break;
    case "GBP":
        rate=0.8
        sign="£"
        break;
    case "JPY":
        rate=150.20
        sign="¥"
        break;
    case "AUD":
        rate=1.52
        sign="A$"
        break;
}
final=usd*rate

console.log("$"+usd+" equals "+sign+final.toFixed(2))