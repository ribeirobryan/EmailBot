
function sendEmail(){
    
    let userEmailAddress = document.getElementById("userEmailaddress").value
    let userSubject = document.getElementById("subject").value
    let userMessage = document.getElementById("messageContent").value
    let userName = document.getElementById("userName").value
    let userPhoneNumber = document.getElementById("userPhoneNumber").value

    let messageSubject = userSubject + " - " + userName

    let messageContent = userMessage + "        " + userPhoneNumber


    Email.send({
        
        Host : "smtp.elasticemail.com",
        Username : "ribeirobryandois@gmail.com",
        Password : "670DFB5650448756C7ED1BFBC03E853084CE",
        To : "ribeirobryandois@gmail.com",
        From : "ribeirobryandois@gmail.com",
        Subject : messageSubject,
        Body : messageContent

    }).then(
      message => alert(message)
    );
}