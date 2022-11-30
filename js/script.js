const password = document.querySelector('#pwd')
const confirmPwd = document.querySelector('#confirm_pwd')
const pwdMatch = document.querySelector('.pwd_no_match')
const submitBtn = document.querySelector('button')




function passwordMatch(){
    if (password.value != confirmPwd.value){
        pwdMatch.textContent = '* Password does not match';
        password.style.outline = '0.5px solid red'
        confirmPwd.style.outline = '0.5px solid red'
        submitBtn.disabled = true
    }
    else if(password.value == '' || confirmPwd.value == ''){
        pwdMatch.textContent == ''
        submitBtn.disabled = true
    }
    else{
        pwdMatch.textContent = '';
        submitBtn.disabled = false
        confirmPwd.style.outline = null
        password.style.outline =null
    };
}



confirmPwd.addEventListener('keyup',passwordMatch)


