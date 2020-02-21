function validation(){
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var phone_number = document.getElementById("phone_number").value;
    var comments = document.getElementById("comments").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(first_name.length < 2) {
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(last_name.length < 1) {
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone_number) || phone_number.length < 10) {
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    
    if(comments.length <= 3) {
        text = "Please Enter the Comments";
        error_message.innerHTML = text;
        return false;
    }

    alert("Form Submitted Successfully!")
    return true;
}