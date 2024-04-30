
const parentDOM = document.getElementById("display");
function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function calculate(){
  display.value = eval(display.value);
 

}
function calculate(){
    try{
        display.value =eval(display.value)
    }
    catch(error){
        display.value="Error"
    }
}
const hist= document.getElementById("history")

function fun(){
    parentDOM.innerHTML=eval(display.value);
    console.log(parentDOM)
}
hist.addEventListener('click',fun);