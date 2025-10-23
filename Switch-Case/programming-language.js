//Programming Language
const prompt=require('prompt-sync')(); 
let fileExt=prompt("Enter file extension ");
let language="";
switch (fileExt){
    case(".js"):
        language="Javascript"
        break;
    case(".py"):
        language="Python"
        break;
    case(".java"):
        language="Java"
        break;
    case(".cpp"):
        language="C++"
        break;
    case(".html"):
        language="HTML"
        break;
    default:
        console.log("Invalid language")
}
console.log(language)
