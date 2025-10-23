// Parking Fee Calculator
const prompt=require('prompt-sync')();
let vehicle=prompt("Enter vehicle type ");
let time=prompt("Enter time parked (hours) ");
let rate=""
let final=""
switch (vehicle){
    case ("motorcycle"):
        rate=2
        break;
    case ("car"):
        rate=3
        break;
    case ("suv"):
        rate=4
        break;
    case ("truck"):
        rate=5
        break;
    default:
        console.log("Invalid Input")
}
final=time*rate
if (time>5){
    final=final+10
}
console.log("The vehicle "+vehicle+" parked for "+time+" hours leads to a fee of $"+final)