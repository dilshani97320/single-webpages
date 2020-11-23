const inputbox=document.getElementById("inputbox");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const checkpassword=document.getElementById("checkpassword");

inputbox.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInput();
});
function checkInput()
{
    //get values from the input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkpasswordValue = checkpassword.value.trim();

    if(usernameValue==='')
    {
        //show error
        //add error class
        setErrorFor(username,'Username cannot be blank');
    }else{
        //add success class
        setSuccessFor(username);
    }


    if(emailValue==='')
    {
        //show error
        //add error class
        setErrorFor(email,'email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'email is not valid');
    }
    
    else{
        //add success class
        setSuccessFor(email);
    }


    if(passwordValue==='')
    {
        //show error
        //add error class
        setErrorFor(password,'password cannot be blank');
    }else{
        //add success class
        setSuccessFor(password);
    }

    if(checkpasswordValue==='')
    {
        //show error
        //add error class
        setErrorFor(checkpassword,' cannot be blank');
    }else if(passwordValue!==checkpasswordValue){
        setErrorFor(checkpassword,' password is not match');
    }
    else{
        //add success class
        setSuccessFor(checkpassword);
    }


    

}

function setErrorFor(input,message)
{
    const control=input.parentElement;
    const small=control.querySelector('small');
    //add error message inside small
    small.innerText=message;

    //add error class
    control.className='control error';
}

function setSuccessFor(input)
{
    const control=input.parentElement;

    //add error class
    control.className='control success';
}
function isEmail (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  


  document.getElementById("show").addEventListener("click",function(){
      document.querySelector(".form-box").style.display="flex";
  })