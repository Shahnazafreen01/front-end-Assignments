const card = document.getElementById("card");

card.addEventListener("click", () => {
    if(card.style.backgroundColor === "rgb(25, 118, 210)"){
        card.style.backgroundColor = "#0f2a73";
    }else{
        card.style.backgroundColor = "#1976d2"
    }
});