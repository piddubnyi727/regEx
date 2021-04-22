let regExpName =/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
let regExpEmail =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
let regExpPass = /(?=.*[!@#$%^&*])(?=.{8,})/

///--------Varianles--////////
let form = document.forms.formInput
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lasstName')
let pass = document.getElementById('passwordId')
let passwo = document.getElementById('passwordDere')
let btnSignUp = document.getElementById('btnStyle')
let greatWindow = document.getElementById('greatMain')
let btnBreack = document.getElementById('btnBreack')
let che = document.getElementById('che')


///--------End Varianles--////////

form.firstName.addEventListener('input', function(){
    if(regExpName.exec(this.value)){
        this.style.borderColor = 'green'
        firstName.style.display = 'none'
        checkField()
    }
    else{
        this.style.borderColor = 'red'
        firstName.style.display = 'block'
        
    }
    
})

form.lastName.addEventListener('input', function(){
    if(regExpName.exec(this.value)){
        this.style.borderColor = 'green'
        lastName.style.display = 'none'
        checkField()
    }
    else{
        this.style.borderColor = 'red'
        lastName.style.display = 'block'
        
    }
    
})

form.emailAdress.addEventListener('input', function(){
    if(regExpEmail.exec(this.value)){
        this.style.borderColor = 'green'
        pass.style.display = 'none'
        
    }
    else{
        this.style.borderColor = 'red'
        pass.style.display = 'block'
       
    }
    checkField()
})

form.password.addEventListener('input', function(){
    if(regExpPass.exec(this.value)){
        this.style.borderColor = 'green'
        passwo.style.display = 'none'
        
    }
    else{
        this.style.borderColor = 'red'
        passwo.style.display = 'block'
        
    }
    checkField()
})

btnSignUp.addEventListener('click', function(){
    greatWindow.style.display = 'block'
    checkField()
})
btnBreack.addEventListener('click', function(){
    greatWindow.style.display = 'none'
    form.reset()
    che.checked=false
})

che.addEventListener('click', function(){
    checkField()
})

function checkField(){
    if(inpt1.value && inpt2.value && inpt3.value && inpt4.value && che.checked){
        btnSignUp.disabled = false
    }
    else{
        btnSignUp.disabled = true
    }
}

 
