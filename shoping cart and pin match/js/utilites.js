// function updateCaseNumber(isIncrease) {
//     const numberField = document.getElementById('case-number-field')
//     const numberFieldString = numberField.value
//     const previousNumberfieldValue = parseInt(numberFieldString)
//     let newNumberFieldValue;
//     if (isIncrease === true) {
//         newNumberFieldValue = previousNumberfieldValue + 1;
//     }
//     else {
//         newNumberFieldValue = previousNumberfieldValue - 1
//     }
//     numberField.value = newNumberFieldValue
//     return newNumberFieldValue;
// }


function getTextElementValueById(elementIdName) {
    const phoneTotalElement = document.getElementById(elementIdName)
    const currentPhoneTotalString = phoneTotalElement.innerText
    const currentPhoneTotal = parseInt(currentPhoneTotalString)
    return currentPhoneTotal;
}

function setTextElementvalueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId)
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total')
    const currentCaseTotal = getTextElementValueById('case-total')
    const currentSubTotal = currentPhoneTotal + currentCaseTotal
    setTextElementvalueById('sub-total', currentSubTotal)
    setTextElementvalueById('tax-amount', currentSubTotal)


}