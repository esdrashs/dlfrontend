const frmlogin = document.getElementById('frmlogin')
const txtUsername = document.getElementById('txtUsername')
const txtPassword = document.getElementById('txtPassword')


frmlogin.addEventListener('submit', (e) => {
    //e.preventDefault()

    let errors= []

    errors = getLoginFormErrors(txtUsername.value, txtPassword.value)

    if (errors.length > 0) {
        e.preventDefault()
    }
})

function getLoginFormErrors(username, password) {
    let errors = []

    if (password == '' || password == null) {
        errors.push('Password is required')
        txtPassword.parentElement.classList.add('incorrect')
    }

    if (username == '' || username == null) {
        errors.a.push('Username is required')
        //txtUsername.parentElement.classList.add('this field is required')
    }


    
}