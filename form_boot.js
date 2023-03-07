


function validation() {
    let name = document.getElementById('name').value
    let  email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let isValid = true;
    if (name == "") {
      document.getElementById('username').innerHTML = "Please enter your name";
    isValid =  false;
    }
    else{
        document.getElementById('username').innerHTML = "";
    }
    if (email == "") {
        document.getElementById('Email').innerHTML = "Please enter your email";
        isValid =  false;
      }
      else{
        document.getElementById('username').innerHTML = "";
      }
      if (password == "") {
        document.getElementById('pass').innerHTML = "Please enter your password";
        isValid =  false;
      }
      else{
        document.getElementById('username').innerHTML = "";
      }
      return isValid;
}