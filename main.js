/*jshint esversion: 6 */

const advNum = document.getElementById("adv-num");
const dice = document.getElementById("btn");
const advText = document.querySelector(".adv-text");

window.onload = generateAdvice;

dice.addEventListener("click", function() {
    generateAdvice();
});


function generateAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        advNum.innerText = data.id;
        advText.innerText = data.advice;
        console.log(data.advice)
    })
    .catch(error => {
        alert(`Error ${error}`);
    });
}

