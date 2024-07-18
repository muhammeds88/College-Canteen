// Function to redirect to login.html after animation completes
function redirectToLogin() {
  window.location.href = "./Webpages/FAQ/faq.html"; // Redirecting to login.html
}
// Set a timeout to redirect after 4 seconds (2 cycles)
setTimeout(redirectToLogin, 4000); // Setting a timeout for redirection
