


























//FORMULARZ

let nameIn = document.getElementById("name");
let nameMsg = document.querySelector(".nameMsg");
let surnameIn = document.getElementById("surname");
let surnameMsg = document.querySelector(".surnameMsg");
let telMsg = document.querySelector(".telMsg");
let telIn = document.getElementById("tel");
let mailIn = document.getElementById("mail");
let mailMsg = document.querySelector(".mailMsg");

function checkName(){
    let reName = /[0-9]/g;
   
    if (nameIn.value.length < 2){
        nameMsg.textContent = "Twoje imię jest za krótkie";
  
    }
    if (nameIn.value.length >= 3)
      {  nameMsg.textContent = "";
    }
    if(reName.test(nameIn.value)){
        nameMsg.textContent = "Niedozwolone znaki";
    }
}

function checkSurname(){
    let reName = /[0-9]/g;
   
    if (surnameIn.value.length < 2){
        surnameMsg.textContent = "Twoje nazwisko jest za krótkie";
  
    }
    if (surnameIn.value.length >= 3)
      {  surnameMsg.textContent = "";
    }
    if(reName.test(surnameIn.value)){
        surnameMsg.textContent = "Niedozwolone znaki";
    }
}

function checkTel(){
    let reTel = /[a-zA-Z]/g;
    if (telIn.value.length < 9 || reTel.test(telIn.value)){
        telMsg.textContent = "Nieprawidłowy numer";
    }
    else {
        telMsg.textContent = "";
    }
}
function checkMail(){
    let reMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (reMail.test(mailIn.value)){
        mailMsg.textContent = "";
    }
    else {
        mailMsg.textContent = "Nieprawidłowy adres e-mail";
    }
}



nameIn.addEventListener("input", checkName);
surnameIn.addEventListener("input", checkSurname);
telIn.addEventListener("input", checkTel);
mailIn.addEventListener("input", checkMail);