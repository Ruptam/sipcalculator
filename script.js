let slider = document.querySelector('#investmentRange');
let percentageSlider = document.querySelector('#expectedReturn');
let yearSlider = document.querySelector('#yearSlider');
const investmentAmount = document.querySelector('#investmentAmount');
const rateOfReturn = document.querySelector('#returnText');
const numOfYears = document.querySelector('#yearInp');
const returnAmount = document.querySelector('.rAmount');
investmentAmount.value = 1000;
rateOfReturn.value = 10;
numOfYears.value = 10;
getAmount();
getReturn();
getYears();


slider.addEventListener('change', (event) => {
    const sliderAmount = document.getElementById('investmentRange').value;
    investmentAmount.value = sliderAmount;
    const principle = document.querySelector('.iAmount');
    principle.textContent = investmentAmount.value * 12 * numOfYears.value;
    const totalAmount = showResult();
    const estReturn = totalAmount - getAmount();
    document.querySelector('.eAmount').textContent = Math.round(estReturn);
});

percentageSlider.addEventListener('change', (event) => {
    const returnPercentage = document.getElementById('expectedReturn').value;
    rateOfReturn.value = returnPercentage;
    const totalAmount = showResult();
    const investedValue = investmentAmount.value * 12 * numOfYears.value;
    const estReturn = totalAmount - investedValue;
    document.querySelector('.eAmount').textContent = Math.round(estReturn);
});

yearSlider.addEventListener('change', (event) => {
    const numOfYearsValue = document.getElementById('yearSlider').value;
    numOfYears.value = numOfYearsValue;
    const principle = document.querySelector('.iAmount');
    principle.textContent = investmentAmount.value * 12 * numOfYears.value;
    const totalAmount = showResult();
    const investedValue = investmentAmount.value * 12 * numOfYears.value;
    const estReturn = totalAmount - investedValue;
    document.querySelector('.eAmount').textContent = Math.round(estReturn);
})

function getAmount() {
    slider.valueAsNumber = investmentAmount.value;
    const principle = document.querySelector('.iAmount');
    const investedValue = investmentAmount.value * 12 * numOfYears.value;
    principle.textContent = investedValue.toLocaleString();
    const totalAmount = showResult();
    const estReturn = totalAmount - investedValue;
    document.querySelector('.eAmount').textContent = Math.round(estReturn);
    return investedValue;
}

function getReturn() {
    percentageSlider.valueAsNumber = rateOfReturn.value;
    const totalAmount = showResult();
    const investedValue = investmentAmount.value * 12 * numOfYears.value;
    const estReturn = totalAmount - investedValue;
    document.querySelector('.eAmount').textContent = Math.round(estReturn);
}

function getYears() {
    yearSlider.valueAsNumber = numOfYears.value;
    const principle = document.querySelector('.iAmount');
    principle.textContent = (investmentAmount.value * 12 * numOfYears.value).toLocaleString();
    const totalAmount = showResult();
    const investedValue = investmentAmount.value * 12 * numOfYears.value;
    const estReturn = totalAmount - investedValue;
    document.querySelector('.eAmount').textContent = Math.round(estReturn);
}

function showResult() {
    const interestPerMonth =  (rateOfReturn.value / 100) / 12;
    const maturedAmount = investmentAmount.value * ((Math.pow((1 + interestPerMonth), (numOfYears.value * 12)) - 1) / interestPerMonth) * (1 + interestPerMonth);
    returnAmount.textContent = Math.round(maturedAmount).toLocaleString();
    return maturedAmount;
}