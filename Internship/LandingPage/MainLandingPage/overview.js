// Sidebar active menu

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});

// Theme Toggle

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

});

// Load saved theme

window.onload = () =>{

    if(localStorage.getItem("theme")==="dark"){
        document.body.classList.add("dark");
    }

};

// Quick Actions

document.getElementById("profileBtn").addEventListener("click", () => {
    alert("Navigate to Edit Profile page.");
});

document.getElementById("passwordBtn").addEventListener("click", () => {
    alert("Navigate to Change Password page.");
});