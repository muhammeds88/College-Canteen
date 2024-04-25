const bars = document.querySelectorAll('.bar');

    bars.forEach(bar => {
        bar.addEventListener('click', () => {
            bars.forEach(b => {
                if (b !== bar) {
                    b.classList.remove('expand');
                }
            });
            bar.classList.toggle('expand');
        });
    });

    
    
    // Get the camera icon element
var cameraIcon = document.getElementById("cameraIcon");

// Add click event listener to the camera icon
cameraIcon.addEventListener("click", function() {
    // Check if the browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request access to the camera
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            // Access granted, do something with the camera stream
            console.log("Camera access granted");

            // Log the URL of the camera stream
            console.log("Camera stream URL:", URL.createObjectURL(stream));

            // Optionally, display the camera stream in a video element
            var videoElement = document.createElement('video');
            videoElement.srcObject = stream;
            videoElement.autoplay = true;
            document.body.appendChild(videoElement);
        })
        .catch(function(error) {
            // Handle errors, such as permission denied
            console.error("Error accessing camera:", error);
        });
    } else {
        // Browser doesn't support getUserMedia
        console.error("getUserMedia not supported");
    }
});
