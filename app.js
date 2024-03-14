function formValidation()
{
    var username = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    if(username == "")
    {
       document.getElementById("nameErrorMessage").innerText = "User Name is Required"; 
    }

    if(email == "")
    {
        document.getElementById("emailErrorMessage").innerText = "Email is Required"; 
    }else if(!(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)))
    {
        document.getElementById("emailErrorMessage").innerText = "Email should be like abc@gmail.com"; 
    }

}