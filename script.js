
function sendEmail(){
    
    let toaddrs = document.getElementById("toaddrs").value
    let messageSubject = document.getElementById("messageSubject").value
    let messageContent = document.getElementById("messageContent").value
    

    Email.send({
        
        Host : "smtp.elasticemail.com",
        Username : "ribeirobryandois@gmail.com",
        Password : "670DFB5650448756C7ED1BFBC03E853084CE",
        To : toaddrs,
        From : "ribeirobryandois@gmail.com",
        Subject : messageSubject,
        Body : messageContent

    }).then(
      message => alert(message)
    );
}