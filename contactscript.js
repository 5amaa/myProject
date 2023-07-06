var form = document.getElementById("form");
var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var phoneError= document.getElementById("phoneError");
var messageError = document.getElementById("messageError");


form.addEventListener( 'submit' , (event) => {
    event.preventDefault();
    
    var name =document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message= document.getElementById("message").value;


    if(!name){
        nameError.innerHTML= "Please fill out your full name";
    }else {nameError.innerHTML=""}

    if(!email){
        emailError.innerHTML="Please fill out your email with @"
    }else{emailError.innerHTML=""}
    
    if(!phone){
        phoneError.innerHTML ="Please fill out your phone"
    }else{phoneError.innerHTML=""}

    if(!message){
        messageError.innerHTML="Please drop a message for us "
    }else{messageError.innerHTML=""}


    if(name|| email || phone || message){
    form.submit();}

})






