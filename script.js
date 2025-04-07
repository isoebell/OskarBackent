document.addEventListener('DOMContentLoaded', () => {
    // Select the Exhibitions title (which is the clickable element)
    const exhibitionsTitle = document.querySelector('.drop-navigation .title');
    
    // Select the corresponding .infoText within the same parent
    const infoText = exhibitionsTitle.closest('.item').querySelector('.infoText');
    
    // Check if both elements exist
    if (exhibitionsTitle && infoText) {
        exhibitionsTitle.addEventListener('click', () => {
            console.log("title clicked!"); // Debugging line
            // Toggle the 'show' class to reveal/hide the .infoText
            infoText.classList.toggle('show');
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to show/hide hover images for specific headers and apply blur to video
    function handleHover(headerId, imageId) {
        const header = document.getElementById(headerId);
        const image = document.getElementById(imageId);
        const video = document.getElementById('homepage-video'); // Select the video element

        // Ensure image positioning is correct
        function updateImagePosition(image) {
            image.style.position = 'absolute';  // Absolutely position the image
            image.style.top = '0';  // Align the image to the top of the container
            image.style.left = '50%';  // Center horizontally
            image.style.transform = 'translateX(-50%)';  // Offset by half of its width to center it
        }

        // Add event listeners for hover
        header.addEventListener('mouseenter', function () {
            updateImagePosition(image);  // Ensure correct position when hovered
            image.style.display = 'block';  // Display the image

            // Apply blur to the video when hovering over the header (h2)
            if (video) {
                video.style.filter = 'blur(5px)';  // Apply blur effect to the video
            }
        });

        header.addEventListener('mouseleave', function () {
            image.style.display = 'none';  // Hide the image when hover ends

            // Remove the blur effect when hover ends
            if (video) {
                video.style.filter = '';  // Remove the blur effect
            }
        });
    }

    // Check if the device width is greater than 768 pixels
    if (window.innerWidth > 768) {
        // Apply hover functionality to each header and its corresponding image
        handleHover('RadioSilence', 'hover-image-radio-silence');
        handleHover('RecentWork2024', 'hover-image-recent-work');
        handleHover('RunningAwayFromMe', 'hover-image-running-away-from-me');
        handleHover('AlgorithmsStillReact', 'hover-image-algorithms-still-react');
        handleHover('Goodbye', 'hover-image-goodbye');
        handleHover('Scans', 'hover-image-scans');
        handleHover('CommissionedWork', 'hover-image-commissioned-work');
        handleHover('Bio', 'hover-image-bio');
        handleHover('CV', 'hover-image-cv');
        handleHover('Contact', 'hover-image-contact');
    } else {
        // Ensure images are hidden if on mobile (for devices <= 768px)
        document.querySelectorAll('img').forEach(function (image) {
            image.style.display = 'none';
        });
    }
});
