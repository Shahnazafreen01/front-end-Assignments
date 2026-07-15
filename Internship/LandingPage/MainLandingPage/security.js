const form = document.getElementById("passwordForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const password = form.querySelectorAll("input");

    if(password[1].value.length < 6){

        alert("Password must be at least 6 characters.");
        return;

    }

    if(password[1].value !== password[2].value){

        alert("Passwords do not match.");
        return;

    }

    alert("Password Updated Successfully!");

    form.reset();

});