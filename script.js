// script.js
const costInput = document.getElementById('cost');
const levelInput = document.getElementById('level');
const initialPaymentInput = document.getElementById('initial-payment');
const incomeInput = document.getElementById('income');
const hoursInput = document.getElementById('hours');
const calculateButton = document.getElementById('calculate-button');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', calculateROI);

function calculateROI() {
    const cost = parseFloat(costInput.value);
    const level = parseInt(levelInput.value);
    const initialPayment = parseInt(initialPaymentInput.value);
    const passiveIncome = parseFloat(incomeInput.value);
    const hours = parseFloat(hoursInput.value);

    // Calculate the price to level up the card using the new formula
    const a = 0.7; // coefficient a
    const b = 2; // coefficient b
    const c = 500; // coefficient c
    const priceToLevelUp = a * cost + b * passiveIncome + c;

    // Calculate the ROI
    const roi = (passiveIncome * hours) / priceToLevelUp;

    // Check if the card is a good investment
    if (roi > 1) {
        resultElement.textContent = "This is a good investment!";
    } else {
        resultElement.textContent = "This is not a good investment.";
    }
}
