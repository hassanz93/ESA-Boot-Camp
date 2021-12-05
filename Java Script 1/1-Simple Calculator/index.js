let sumEl = document.getElementById("sum-el")          

function add() {
  
let num1 = parseInt(document.getElementById("num1-el").value);
let num2 = parseInt(document.getElementById("num2-el").value);
  let result = num1 + num2
  sumEl.textContent = "Sum: " + result
}

function subtract() {
let num1 = parseInt(document.getElementById("num1-el").value);
let num2 = parseInt(document.getElementById("num2-el").value);
  let result = num1 - num2
  sumEl.textContent = "Sum: " + result
}

function divide() {
let num1 = parseInt(document.getElementById("num1-el").value);
let num2 = parseInt(document.getElementById("num2-el").value);
  let result = num1 / num2
  sumEl.textContent = "Sum: " + result
}

function multiply() {
  
let num1 = parseInt(document.getElementById("num1-el").value);
let num2 = parseInt(document.getElementById("num2-el").value);
  let result = num1 * num2
  sumEl.textContent = "Sum: " + result
}

num1 = 0
num2 = 0

