function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field')
    const phoneNumberString = phoneNumberField.value
    const previousPhoneNumber = parseInt(phoneNumberString)
    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1
    }
    phoneNumberField.value = newPhoneNumber
    return newPhoneNumber;
}
function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotal = newPhoneNumber * 1219
    const phoneTotalElement = document.getElementById('phone-total')
    phoneTotalElement.innerText = phoneTotal
}
function getTextElementValueById(elementIdName) {
    const phoneTotalElement = document.getElementById(elementIdName)
    const currentPhoneTotalString = phoneTotalElement.innerText
    const currentPhoneTotal = parseInt(currentPhoneTotalString)
    return currentPhoneTotal;
}
function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total')
    const currentCaseTotal = getTextElementValueById('case-total')
    const subTotal = currentPhoneTotal + currentCaseTotal
    const subTotalElement = document.getElementById('sub-total')
    subTotalElement.innerText = subTotal;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true)
    updatePhoneTotalPrice(newPhoneNumber)
    calculateSubTotal()


})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false)
    updatePhoneTotalPrice(newPhoneNumber)
    calculateSubTotal()
})