// script.js
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const href = this.getAttribute("href");

            // Fade out animation
            document.body.style.opacity = 0;

            setTimeout(function() {
                window.location.href = href;
            }, 500); // 0.5s delay to match the transition duration
        });
    });
});
