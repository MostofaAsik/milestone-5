

function getInputFieldValue(fieldIdName) {
    const inputField = document.getElementById(fieldIdName)
    const inputFieldString = inputField.value
    const inputFieldNumber = parseFloat(inputFieldString)
    inputField.value = ''
    return inputFieldNumber;
}
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId)
    const textElementString = textElement.innerText
    const textElementNumber = parseFloat(textElementString)
    return textElementNumber;
}
function setElementvalueById(elementId, newValue) {
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue
}
document.getElementById('btn-deposit').addEventListener('click', function () {


    const rateNumber = getTextElementValueById('deposit-rate')

    const newTotal = rateNumber + fieldNumber;

    setElementvalueById('deposit-rate', newTotal)

    const balanceTotalNumber = getTextElementValueById('totalBalane-rate')
    const newBalanceTotalNumber = balanceTotalNumber + fieldNumber
    setElementvalueById('totalBalane-rate', newBalanceTotalNumber)
})



















 // const depositRate = document.getElementById('deposit-rate')
    // const depositRateString = depositRate.innerText;
    // const depositRateNumber = parseFloat(depositRateString)
    // console.log(depositRateNumber)
