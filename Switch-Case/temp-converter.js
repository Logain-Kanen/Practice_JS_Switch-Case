// Temperature converter
const prompt=require('prompt-sync')();
let temp=parseInt(prompt("Enter temperature value "));
let type=prompt("Enter conversion type F2C/C2F ")
let final=""
switch (type){
    case "F2C":
        final=(temp*9/5)+32
        break;
    case "C2F":
        final=(temp-32)*5/9
        break;
}
console.log("Input "+temp +" equals "+final)