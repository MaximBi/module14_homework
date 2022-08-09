let submitButton = document.querySelector(".btn-go");
let output = document.querySelector(".output");

function isNumber(num) {
  return !isNaN(Number(num));
}

function isInRage(minRage, number, maxRang) {
  return number >= minRage && number <= maxRang;
}

function useRequest(num1, num2) {
  fetch(`https://picsum.photos/${num1}/${num2}`)
    .then(response => {      
      output.innerHTML = `<img src="${response.url}" alt="${response.type}" style="padding:10px" />`;
    })
}

submitButton.addEventListener("click", () => {
  let firstInput = document.querySelector(".input-first-number").value;
  let secondInput = document.querySelector(".input-second-number").value;

  output.innerHTML = "";
  
  if(!firstInput || !secondInput) {
    output.innerHTML = "должны быть заполнены оба поля";
    return;
  } 
  if(!isNumber(firstInput) || !isNumber(secondInput)) {
    output.innerHTML = "одно из чисел не число";
    return;
  } 
  if(isInRage(100, firstInput, 300) && isInRage(100, secondInput, 300)) {
    useRequest(firstInput, secondInput);
    return;
  } 
  output.innerHTML = "одно из чисел вне диапазона от 100 до 300";
});


