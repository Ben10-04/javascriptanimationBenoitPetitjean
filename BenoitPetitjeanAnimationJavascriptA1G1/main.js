const boutons = document.querySelectorAll("button.event");

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        document.body.style.color = "black";
    })
})

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        if(bouton.innerHTML.includes("1"))
            document.body.style.backgroundColor = "red";
        else if(bouton.innerHTML.includes("2"))
            document.body.style.backgroundColor = "green";
        else if(bouton.innerHTML.includes("3"))
            document.body.style.backgroundColor = "blue";
    });
});