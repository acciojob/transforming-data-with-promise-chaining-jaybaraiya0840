//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const textInput = document.getElementById("text").value;
    const delayInput = document.getElementById("delay").value;
    const outputDiv = document.getElementById("output");
    
    if (!textInput || !delayInput) {
        outputDiv.innerText = "Please enter both text and delay values.";
        return;
    }
    
    outputDiv.innerText = "Waiting...";
    await delayMessage(textInput, parseInt(delayInput));
});

async function delayMessage(message, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    document.getElementById("output").innerText = message;
}
