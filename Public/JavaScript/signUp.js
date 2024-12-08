// const form = document.getElementById('form')
// const username_input = document.getElementById('username-input')
// const password_input = document.getElementById('password-input')
// const error_message = document.getElementById('error-message')

// function getLoginFormErrors (username, password) {

//     let errors = []

//     if (username === '' || username == null){
//     errors.push('Username is required')
//     username_input.parentElement.classList.add('incorrect')
//     }

//     if (password === '' || password == null) {
//     errors.push('Password is required')
//     password_input.parentElement.classList.add('incorrect')
//     }

//     return errors;
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault() 
    
//         let errors = []
    
//         errors = getLoginFormErrors (username_input.value, password_input.value)
    
//         if (errors.length > 0) {
//         e.preventDefault()
//         error_message.innerText = errors.join(".")
//         }
    
//         window.location.href = "homepage.html";
// })

