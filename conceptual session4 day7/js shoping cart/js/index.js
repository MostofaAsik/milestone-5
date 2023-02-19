//First card
let serial = 0;
document.getElementById('first-card').addEventListener('click', function () {
    serial += 1;
    const firstProductName = document.getElementById('first-product-name').innerText

    const firstProductPrice = document.getElementById('first-product-price').innerText

    const firstProductQuantity = document.getElementById('first-product-quantity').innerText

    const firstProductTotal = parseInt(firstProductPrice) * parseInt(firstProductQuantity);
    displaydata(firstProductName, firstProductPrice, firstProductQuantity, firstProductTotal)

})

//using event object
document.getElementById('second-card').addEventListener('click', function (event) {
    serial += 1;
    // console.log(event.target.parentNode.parentNode.children[0].innerText)
    const secondProductName = event.target.parentNode.parentNode.children[0].innerText

    const secondProductPrice = event.target.parentNode.parentNode.children[2].children[0].innerText
    const secondProductQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText
    // console.log(secondProductQuantity)
    const secondProductTotal = parseInt(secondProductPrice) + parseInt(secondProductQuantity)
    displaydata(secondProductName, secondProductPrice, secondProductQuantity, secondProductTotal)

})

//third-card
document.getElementById('third-card').addEventListener('click', function () {
    serial += 1;
    const thirdProductName = document.getElementById('third-product-name').innerText

    const thirdProductPrice = document.getElementById('third-product-price').innerText

    const thirdProductQuantity = document.getElementById('third-product-quantity').innerText

    const thirdProductTotal = parseInt(thirdProductPrice) * parseInt(thirdProductQuantity);
    displaydata(thirdProductName, thirdProductPrice, thirdProductQuantity, thirdProductTotal)

})









//common function
function displaydata(productName, productPrice, productQuantity, productTotal) {
    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
     <td>${serial}</td>
     <td>${productName}</td>
     <td>${productPrice}</td>
     <td>${productQuantity}</td>
     <td>${productTotal}</td>
     `

    tableContainer.appendChild(tr)
}