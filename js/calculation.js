// get the input value 
function getIputValue(inputId) {
    const inputValueText = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

// get inner text value
function getAmountTextValue(textId, updatedAmount) {
    const amountText = document.getElementById(textId);
    amountText.innerText = updatedAmount;
}

// calculate total expenses 
function getTotalExpenses() {
    const foodCost = getIputValue('food-cost');
    const rentCost = getIputValue('rent-cost');
    const clothesCost = getIputValue('clothes-cost');

    const totalExpenses = foodCost + rentCost + clothesCost;
    return totalExpenses;
}

function calculate() {
    const totalIncome = getIputValue('total-income');
    const totalExpenses = getTotalExpenses();
    const balance = totalIncome - totalExpenses;
    return balance;

}

function updatedAmount(savingOrExpensesId, newBalanceId, isCalculateButton, isSaveButton) {
    const balance = calculate();
    let newBalance;
    let savingOrExpensesAmount;
    if (isCalculateButton) {
        savingOrExpensesAmount = getTotalExpenses();
        newBalance = balance;
    }
    else if (isSaveButton) {
        const savingAmount = getSavingAmount();
        newBalance = balance - savingAmount;
        savingOrExpensesAmount = savingAmount;
    }
    document.getElementById(savingOrExpensesId).innerText = savingOrExpensesAmount;
    document.getElementById(newBalanceId).innerText = newBalance;
}

function getSavingAmount() {
    const savingInputValue = getIputValue('saving-input');
    const balance = calculate();
    const savingAmount = balance * savingInputValue / 100;
    return savingAmount;

}

// calculate expenses and balance 
document.getElementById('calculate-button').addEventListener('click', function () {
    updatedAmount('total-expenses', 'balance', true, false);
});

// calculate savings and remaining balance 
document.getElementById('save-button').addEventListener('click', function () {
    updatedAmount('saving-amount', 'remaining-balance', false, true);
});