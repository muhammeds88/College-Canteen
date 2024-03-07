window.addEventListener("load", function() {
    // Decrease blur gradually when the page starts loading
    document.body.style.filter = "blur(5px)";
    let blurAmount = 5;
    const decreaseInterval = setInterval(function() {
        blurAmount -= 0.5;
        document.body.style.filter = `blur(${blurAmount}px)`;
        if (blurAmount <= 0) clearInterval(decreaseInterval);
    }, 40); // Update blur every 40 milliseconds
});

document.addEventListener("DOMContentLoaded", function() {
    // Remove the blur effect when the page is fully loaded
    document.body.style.filter = "none";
    
    // Apply blur effect when navigating to the next page
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const href = this.getAttribute("href");
            document.body.style.filter = "blur(5px)";
            setTimeout(() => window.location.href = href, 500);
        });
    });
});
