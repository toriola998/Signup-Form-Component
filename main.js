const submitBtn = document.querySelector('button')
const input = [...document.querySelectorAll('input')]  //CONVERT NODELIST TO ARRAY
const errFirstName = document.querySelector('#err-fname');
const errLastName = document.querySelector('#err-lname')
const errEmail = document.querySelector('#err-email')
const errPassword = document.querySelector('#err-password')

function validateForm (){
    input.forEach( (inp) => {
        if (inp.id === 'first-name' && inp.value === '') {
            validityError(inp, errFirstName)
        } else if (inp.id === 'first-name' && inp.value !== ''){
            validitySuccess(inp, errFirstName)
        }

       if (inp.id === 'last-name' && inp.value === '') {
           validityError(inp, errLastName)
        } else if (inp.id === 'last-name' && inp.value !== ''){
            validitySuccess(inp, errLastName)   
        }

        if (inp.id === 'email' && inp.value === '') {
            emailValidityError (inp, errEmail)
        }else if (inp.id === 'email' && inp.value !== ''){
            let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (inp.value.match(validRegex)) {
                validitySuccess(inp, errEmail)
            } else { 
                  validityError(inp, errEmail) 
            }
        }
        if (inp.id === 'password' && inp.value === '') {
            validityError(inp, errPassword); 
        }else if (inp.id === 'password' && inp.value !== ''){
            validitySuccess(inp, errPassword);
        }
    })
}

// ADD STYLES TO INPUT WHEN THERE'S AN ERROR
function validityError(input, errorMsg) {
    input.placeholder = " ";
    errorMsg.style.display = 'block'
    input.nextElementSibling.style.display = 'block';
    input.parentElement.classList.add('error');
}

// REMOVE ERROR STYLES FROM INPUT IF THERE IS NO ERROR
function validitySuccess(input, errorMsg) {
    errorMsg.style.display = 'none'
    input.nextElementSibling.style.display = 'none';
    input.parentElement.classList.remove('error');
}

//ADD STYLES TO EMAIL INPUT WHEN THERE'S AN ERROR
function emailValidityError (input, errorMsg) {
    input.placeholder = "email@example/com";
    errorMsg.style.display = 'block'
    input.nextElementSibling.style.display = 'block';
    input.parentElement.classList.add('error');
}

//ADD EVENT LISTENER TO SUBMIT BUTTON
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
})