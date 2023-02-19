// document.getElementById('btn-withdraw').addEventListener('click', function () {
//     const withdrawField = document.getElementById('withdraw-field')
//     const newWithdrawString = withdrawField.value
//     const newwithdrawNumber = parseFloat(newWithdrawString)

//     const withdrawRate = document.getElementById('withdraw-rate')
//     const withdrawrateString = withdrawRate.innerText
//     const withdrawrateNumber = parseFloat(withdrawrateString)

//     withdrawRate.innerText = newwithdrawNumber + withdrawrateNumber

//     const totalBalance = document.getElementById('total-balance')
//     const totalBalanceString = totalBalance.innerText
//     const totalBalanceNumber = parseFloat(totalBalanceString)


//     if(newwithdrawNumber >totalBalanceNumber){
//         alert('Money Unavailable')
//         return;
//     }
//     const totalCurrentBalance = totalBalanceNumber - newwithdrawNumber
//     totalBalance.innerText = totalCurrentBalance



//     withdrawField.value = ''

// })

// document.getElementById('btn-withdraw').addEventListener('click', function () {
//     const withdrawField = document.getElementById('withdraw-field')
//     const withdrawFieldString = withdrawField.value

//     const withdrawRate = document.getElementById('withdraw-rate')
//     const withdrawRatestring = withdrawRate.innerText
//     withdrawRate.innerText = parseFloat(withdrawRatestring) + parseFloat(withdrawFieldString)

//     const totalBalance = document.getElementById('total-balance')
//     const totalBalanceString = totalBalance.innerText
//     totalBalance.innerText = parseFloat(totalBalanceString) + parseFloat(withdrawFieldString)

// })

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawFieldString = withdrawField.value;
    withdrawField.value = ''
    if (isNaN(parseFloat(withdrawFieldString))) {
        alert('Provide Number')
        return;
    }




    const totalBalance = document.getElementById('total-balance')
    const totalBalanceString = totalBalance.innerText;


    if (parseFloat(withdrawFieldString) > parseFloat(totalBalanceString)) {
        alert('Money Unavilable')
        return;
    }

    const withdrawRate = document.getElementById('withdraw-rate')
    const withdrawRatestring = withdrawRate.innerText
    withdrawRate.innerText = parseFloat(withdrawRatestring) + parseFloat(withdrawFieldString)

    totalBalance.innerText = parseFloat(totalBalanceString) - parseFloat(withdrawFieldString)


})