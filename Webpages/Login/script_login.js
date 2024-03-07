// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Remove the blur effect when the page is fully loaded
    document.body.style.filter = "none";
    
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const href = this.getAttribute("href");

            // Apply blur effect when navigating to the next page
            document.body.style.filter = "blur(5px)";

            setTimeout(function() {
                window.location.href = href;
            }, 500); // 0.5s delay to match the transition duration
        });
    });
});
