// Apply blur effect when the window finishes loading
window.addEventListener("load", function () {
  // Gradually decrease blur when the page starts loading
  let blurAmount = 5;
  const decreaseInterval = setInterval(function () {
    blurAmount -= 0.5;
    document.body.style.filter = `blur(${blurAmount}px)`;
    if (blurAmount <= 0) clearInterval(decreaseInterval);
  }, 40); // Update blur every 40 milliseconds
});

// Remove blur effect when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  document.body.style.filter = "none"; // Remove blur effect

  // Apply blur effect when navigating to the next page
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      document.body.style.filter = "blur(5px)";
      setTimeout(() => (window.location.href = href), 500);
    });
  });
});
