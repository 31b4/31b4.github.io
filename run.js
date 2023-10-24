
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