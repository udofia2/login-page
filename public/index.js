const login = document.querySelector('.login')
const username = document.querySelector('.username')
const password = document.querySelector('.password')
const loginDetails = document.querySelector('.login-details')
const success = document.querySelector('.success')
const wrong = document.querySelector('.wrong')

const check = {
    thomas: '1',
    udofia: 'learner000',
    john: 'notfound404'
}
wrong.style.visibility = 'hidden'
success.style.visibility = 'hidden'
const validateField = (e) => {
    
    for(let [user, pass] of Object.entries(check)) {
        if (username.value.toLowerCase() == user && password.value == pass) {
            loginDetails.style.visibility = 'hidden'
            success.style.visibility = 'visible'
            return wrong.style.visibility = 'hidden'
        } else {
            wrong.style.visibility = 'visible'
        } 
    }
}
login.addEventListener('click', ()=>console.log(validateField()))