function getPin() {
    const pin = generatePin()
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('pin 3 digit', pin)
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayfieldPin = document.getElementById('display-pin')
    displayfieldPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText
    const typedNumber = document.getElementById('typed-numbers')
    const previousTypedNumber = typedNumber.value
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumber.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split()
            digits.pop()
            const remainingDigits = digits.join('')
            typedNumber.value = remainingDigits;
        }
    }
    else {
        const newtypedNumber = previousTypedNumber + number
        typedNumber.value = newtypedNumber;
    }


})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayfieldPin = document.getElementById('display-pin')
    const currentPin = displayfieldPin.value
    const typedNumberField = document.getElementById('typed-numbers')
    const typeNumber = typedNumberField.value;

    const successPin = document.getElementById('pin-succes')
    const pinfailure = document.getElementById('pin-failure')
    if (typeNumber === currentPin) {
        successPin.style.display = 'block'
        pinfailure.style.display = 'none'
    }
    else {
        pinfailure.style.display = 'block'
        successPin.style.display = 'none'


    }
})