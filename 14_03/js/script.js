function init() {
    let inputField = document.querySelector(".input-text");
    let buttonGo = document.querySelector(".btn-go");
    let outputText = document.querySelector(".output");

    buttonGo.addEventListener("click", () => {
        let inputtedNumber = +inputField.value;
        if (inputtedNumber > 10 || inputtedNumber < 1) {
            outputText.innerHTML = `Number ${inputtedNumber} is out of range 1 to 10`;
            return;
        } 
        outputText.innerHTML = "";
        useRequest(inputtedNumber, true);

        
    });
}

function useRequest(num, async) {
    let reqUrl = `https://picsum.photos/v2/list?limit=${num}`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", reqUrl, async);
    xhr.send();
    xhr.onload = function() {
        console.log(xhr.status);
    }
}

document.addEventListener("DOMContentLoaded", init);