function getInputFieldValueById(inputFieldIdName) {
    const inputField = document.getElementById('inputFieldIdName')
    return inputField;
}

document.getElementById('btn-deposit').addEventListener('click', function () {
    const inputFieldValue = getInputFieldValueById('deposit-field')
    console.log(inputField)
})