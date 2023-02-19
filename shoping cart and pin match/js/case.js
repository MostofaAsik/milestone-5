function updateCaseNumber(isIncrease) {
    const numberField = document.getElementById('case-number-field')
    const numberFieldString = numberField.value
    const previousNumberfieldValue = parseInt(numberFieldString)
    let newNumberFieldValue;
    if (isIncrease === true) {
        newNumberFieldValue = previousNumberfieldValue + 1;
    }
    else {
        newNumberFieldValue = previousNumberfieldValue - 1
    }
    numberField.value = newNumberFieldValue
    return newNumberFieldValue;
}

function updateCaseTotalPrice(newNumberFieldValue) {
    const caseTotalPrice = newNumberFieldValue * 59
    const caseTotalElement = document.getElementById('case-total')
    caseTotalElement.innerText = caseTotalPrice
}

document.getElementById('case-btn-plus').addEventListener('click', function () {
    const newNumberFieldValue = updateCaseNumber(true)

    updateCaseTotalPrice(newNumberFieldValue)
    calculateSubTotal()

})

document.getElementById('case-btn-minus').addEventListener('click', function () {
    const newNumberFieldValue = updateCaseNumber(false)

    updateCaseTotalPrice(newNumberFieldValue)
    calculateSubTotal()
}) 