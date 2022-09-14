// submit
let loginBtn = document.getElementById("submitBtn");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let username = document.getElementById("username");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault()

    
    if(password1.value != password2.value){
        alert("Invalid Input")
    }
    else if(password1.value.length && password2.value.length < 8){
        alert("Password should be greater than 8");
    }
    else if(password1.value === "" && password2.value == "" || username.value == ""){
        alert("Invalid Input");
        console.log("Invalid Input");
    }
    else{
        alert("Successfully Login");
        console.log("Login");
        console.log("Password Verified " + password1.value + " " + password2.value);
        console.log("Username:" + username.value);
        password1.value ="";
        password2.value ="";
        username.value ="";
    }
})
