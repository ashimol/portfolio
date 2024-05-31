
function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
        
    }
    emailjs.send("service_oj07kgr", "template_03ld2la", params ). then(function (res) {
        alert("Sucess! " + res.status);
    })
}