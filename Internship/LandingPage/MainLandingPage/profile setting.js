const form = document.getElementById("profileForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = document.querySelectorAll("input");

    for(let input of inputs){

        if(input.value.trim()===""){
            alert("Please fill all fields.");
            input.focus();
            return;
        }

    }

    alert("Profile updated successfully!");

});