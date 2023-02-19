document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field')
    const depositFieldString = depositField.value
    const depositFieldNumber = parseFloat(depositFieldString)
    depositField.value = ''
    if (isNaN(depositFieldNumber)) {
        alert('Provide Number')
        return
    }

    const depositRate = document.getElementById('deposit-rate')
    const depositRateString = depositRate.innerText
    const depositRateNumber = parseFloat(depositRateString)

    const newTotalDepositRate = depositRateNumber + depositFieldNumber
    depositRate.innerText = newTotalDepositRate

    const totalBalanceRate = document.getElementById('totalBalane-rate')
    const totalBalanceRateString = totalBalanceRate.innerText
    const totalBalanceRateNumber = parseFloat(totalBalanceRateString)

    const newTotalBalancerRate = totalBalanceRateNumber + depositFieldNumber
    totalBalanceRate.innerText = newTotalBalancerRate


})