//step-1:add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {

    //step-2: get the email address when i wirte email input field
    const emailField = document.getElementById('user-Email')
    const emailtext = emailField.value
    //step-3: get the password when i wirte password input field
    const passwordField = document.getElementById('user-password')
    const passwordtext = passwordField.value;

    //step-4:verify email and password
    if (emailtext === 'mas@son.com' && passwordtext === 'mas123') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Wrong!! Invalid User')
    }

})