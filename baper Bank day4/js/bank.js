//step-1
// document.getElementById('btn-deposit').addEventListener('click', function () {
//     //step-2
//     const depositField = document.getElementById('deposit-field')
//     const newDepositTextString = depositField.value
//     const newDepositText = parseFloat(newDepositTextString)

//     //step-3
//     const depositRate = document.getElementById('deposit-rate')
//     const oldDepositTotalstring = depositRate.innerText
//     const oldDepositTotal = parseFloat(oldDepositTotalstring)
//     //step4
//     const currentDepositTotal = oldDepositTotal + newDepositText;
//     depositRate.innerText = currentDepositTotal;

//     //step5
//     const balanceTotalElement = document.getElementById('total-balance')
//     const balanceTotalElementString = balanceTotalElement.innerText
//     const balanceTotalNumber = parseFloat(balanceTotalElementString)

//     //step-6
//     const currentbalanceTotal = balanceTotalNumber + newDepositText
//     balanceTotalElement.innerText = currentbalanceTotal

//     //step-7
//     depositField.value = '';

// })

//again practice1
// document.getElementById('btn-deposit').addEventListener('click', function () {
//     const inputfield = document.getElementById('deposit-field')
//     const inputfieldString = inputfield.value

//     const depositRate = document.getElementById('deposit-rate')
//     const newDepositrateString = depositRate.innerText

//     depositRate.innerText = parseFloat(newDepositrateString) + parseFloat(inputfieldString)

//     const totalBalance = document.getElementById('total-balance')
//     const totalBalanceString = totalBalance.innerText
//     totalBalance.innerText = parseFloat(totalBalanceString) + parseFloat(inputfieldString)
// })

//again practice1

document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field')
    const depositFieldString = depositField.value

    const depositRate = document.getElementById('deposit-rate')
    const depositRateString = depositRate.innerText
    depositRate.innerText = parseFloat(depositRateString) + parseFloat(depositFieldString)
    const totalBalance = document.getElementById('total-balance')
    const totalBalanceString = totalBalance.innerText
    totalBalance.innerText = parseFloat(totalBalanceString) + parseFloat(depositFieldString)

    depositField.value = ''

})

