const requireInputs = document.querySelectorAll('input[type="text"],input[type="email"],input[type="password"]');


for (const input of requireInputs) {
    
    input.addEventListener('input',changeInput);
}

function changeInput(e) {
    
    if(!this.checkValidity()){
        this.classList.add('invalid-input');
    }
    else{
        this.classList.remove('invalid-input');
    }
    
}

const password = document.querySelector('#password');

password.addEventListener('input', (event)=>{

    if(password.tooShort){
        password.setCustomValidity("I am too short for password!");
    }
    else {
        password.setCustomValidity("");
    }

});

const confirmPassword = document.querySelector('#confirm-password');

confirmPassword.addEventListener('input', (event)=>{
    
    if(confirmPassword.value !== password.value){
        confirmPassword.setCustomValidity("The entered passwords do not match!");
    }
    else {
        confirmPassword.setCustomValidity("");
        confirmPassword.classList.remove('invalid-input');
        
    }
    console.log(confirmPassword.validity.valid);
    console.log(confirmPassword.checkValidity());

});


