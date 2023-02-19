function getInputFieldValueById(idName) {
    const getField = document.getElementById(idName);
    const getFieldString = getField.value
    const getFieldNumber = parseFloat(getFieldString)
    return getFieldString;
}

function getElementValueById(idName) {
    const elementText = document.getElementById(idName)
    const elementTextString = elementText.innerText
    const elementTextNumber = parseFloat(elementTextString)
    return elementTextNumber;
}
function setElementValueById(elementId, newvalue) {
    const textElement = document.getElementById(elementId)
    textElement.innerText = newvalue;
}




document.getElementById('btn-deposit').addEventListener('click', function () {
    const inputField = getInputFieldValueById('depositField')
    console.log(inputField)

    const elementText = getElementValueById('deposit-rate')
    console.log(elementText)

})