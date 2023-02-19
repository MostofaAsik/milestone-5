// document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
//   const quantity = getInputValue('kitkat-quantity')
//   const kitkatCost = quantity * 200;
//   setInnerText('chocolate', kitkatCost)
//   total()
// })

// document.getElementById('rose-buy-btn').addEventListener('click', function () {
//   const quantity = getInputValue('rose-quantity')
//   const roseCost = quantity * 100;
//   setInnerText('rose', roseCost)
//   total()

// })
// document.getElementById('diary-buy-btn').addEventListener('click', function () {
//   const quantity = getInputValue('diary-quantity')
//   const diaryCost = quantity * 100;
//   setInnerText('diary', diaryCost)
//   total()
// })
// function setInnerText(id, value) {
//   document.getElementById(id).innerText = value
// }

// function getInputValue(idName) {
//   const inputFieldValue = document.getElementById(idName).value
//   return parseFloat(inputFieldValue);
// }

// function total() {
//   const chocolate = document.getElementById('chocolate').innerText
//   const rose = document.getElementById('rose').innerText
//   const diary = document.getElementById('diary').innerText
//   const total = parseFloat(chocolate) + parseFloat(rose) + parseFloat(diary)
//   setInnerText('total', total)
// }

// document.getElementById('promoApplyBtn'), addEventListener('click', function () {
//   const promoCode = getInputValue('promo-code')
//   if (promoCode == 101) {
//     const total = document.getElementById('total').innerText
//     const sum = total - parseFloat(total) * 0.1;
//     setInnerText('all-total', sum)
//   }
//   else {
//     alert('Wrong Promo Code')
//   }
// })



document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
  const quantity = getInputValue('kitkat-quantity')
  const chocolatePrice = quantity * 200;
  setInnerText('chocolate', chocolatePrice)
  total()
})

document.getElementById('rose-buy-btn').addEventListener('click', function () {
  const quantity = getInputValue('rose-quantity')
  const rosePrice = quantity * 100;
  setInnerText('rose', rosePrice)
  total()
})
document.getElementById('diary-buy-btn').addEventListener('click', function () {
  const quantity = getInputValue('diary-quantity')
  const diaryPrice = quantity * 100;
  setInnerText('diary', diaryPrice)
  total()
})
document.getElementById('promoApplyBtn').addEventListener('click', function () {
  const promoCode = getInputValue('promo-code')
  if (promoCode == 101) {
    const totalCostValue = document.getElementById('total').innerText
    const discountValue = totalCostValue - parseFloat(totalCostValue) * 0.1
    setInnerText('all-total', discountValue)

  }
  else {
    alert('wrong promocode')
  }
})

function getInputValue(inputFieldIdName) {
  const inputFiledvalue = document.getElementById(inputFieldIdName).value
  return parseFloat(inputFiledvalue);
}

function setInnerText(textIdName, value) {
  document.getElementById(textIdName).innerText = value
}

function getTextValue(TextFieldIdName) {
  const inputFiledvalue = document.getElementById(TextFieldIdName).innerText
  return parseFloat(inputFiledvalue);
}

function total() {
  const chocolateTotal = getTextValue('chocolate')
  const roseTotal = getTextValue('rose')
  const diaryTotal = getTextValue('diary')
  const totalCost = chocolateTotal + roseTotal + diaryTotal
  setInnerText('total', totalCost)


}