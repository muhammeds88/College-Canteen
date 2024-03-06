// Function to redirect to login.html after animation completes
function redirectToLogin() {
    window.location.href = './Webpages/Login/login.html';
  }
// Set a timeout to redirect after 6 seconds (3 cycles)
setTimeout(redirectToLogin, 6000);
  