document.getElementById("signupForm").addEventListener("submit",function(e){

    e.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(firstName == "" || lastName == "" || email == "" || password == "" || confirmPassword == ""){
        alert ("Please fill all fields.");
        return;
    }

    if (password.length < 8){
        alert("Password must be at least 8 characters.");
        return;
    }

    if(passsword !== confirmPassword){
        alert("Passwords do not match.");
        return;
    }

    alert("Account Created Successfully!");
});