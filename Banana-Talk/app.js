var btnTranslate= document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText = "Tanay Pratap"



btnTranslate.addEventListener("click", function clickEventHandler(){
    outputDiv.innerText = "ajjajaja " + txtInput.value;
});