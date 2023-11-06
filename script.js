const changeTextButton = document.getElementById("change text button");
const outputText = document.getElementById("outputText");

const newMessage = "this is the changed message";

changeTextButton.addEventListener("click", function(){
    outputText.textContent=newMessage;
})
