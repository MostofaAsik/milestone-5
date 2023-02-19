document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawFieldString = withdrawField.value
    const withdrawFieldNumber = parseFloat(withdrawFieldString)
    withdrawField.value = ''
    if (isNaN(withdrawFieldNumber)) {
        alert('Provide Number')
        return;
    }
    const withdrawRate = document.getElementById('withdraw-rate')
    const withdrawRateString = withdrawRate.innerText
    const withdrawRateNumber = parseFloat(withdrawRateString)
    const newTotalWithdrawRate = withdrawRateNumber + withdrawFieldNumber
    withdrawRate.innerText = newTotalWithdrawRate

    const totalBalaneRate = document.getElementById('totalBalane-rate')
    const totalBalanceRateString = totalBalaneRate.innerText
    const totalBalanceRateNumber = parseFloat(totalBalanceRateString)
    const newTotalBalance = totalBalanceRateNumber - withdrawFieldNumber;
    totalBalaneRate.innerText = newTotalBalance

    // if (withdrawFieldNumber > totalBalanceRateNumber) {
    //     alert('money Unavailable')
    //     return;
    // }








})