let display = document.getElementById("display");

function appendValue(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){
try{
display.value = eval(display.value);
}
catch{
display.value = "Error";
}
}

/* Keyboard Support */

document.addEventListener("keydown", function(event){

let key = event.key;

if(!isNaN(key)){
appendValue(key);
}

if(key === "+") appendValue("+");
if(key === "-") appendValue("-");
if(key === "*") appendValue("*");
if(key === "/") appendValue("/");

if(key === "Enter"){
calculate();
}

if(key === "Backspace"){
deleteLast();
}

if(key === "c" || key === "C"){
clearDisplay();
}

});