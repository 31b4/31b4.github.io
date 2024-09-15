document.addEventListener("DOMContentLoaded", function() {
    const glowbox = document.getElementById("glowbox");
    const background = document.querySelector(".background");
    // After a short delay (adjust as needed), add the final shadow class
    setTimeout(function() {
        glowbox.classList.remove("initial-shadow");
        glowbox.classList.add("final-shadow");
        background.classList.add("show-background");
    }, 0); // Adjust the delay in milliseconds
    
    // You can remove the initial class after adding the final shadow if needed
    // setTimeout(function() {
    //     glowbox.classList.remove("initial-shadow");
    // }, 3000); // Adjust the delay in milliseconds
});

addEventListener("contextmenu", function(e) {
    e.preventDefault();
}); 

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});