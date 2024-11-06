document.addEventListener('DOMContentLoaded', function() {
    // Initialize the Materialize Carousel
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, { duration: 200 });

    // Select elements to update dynamically
    const banner = document.querySelector('.banner');
    const infoTag = document.querySelector('.content h4');
    const titleImg = document.querySelector('.content .movie-title'); // Title image element
    const paragraphTag = document.querySelector('.content p');
    const carouselItems = document.querySelectorAll('.carousel-item');

    // Function to update the content based on clicked carousel item
    function updateContent(item) {
        const bgImage = item.getAttribute('data-bg');
        const titleImageSrc = item.getAttribute('data-title-img');
        const infoContent = item.getAttribute('data-info');
        const paragraphContent = item.getAttribute('data-paragraph');

        // Update background image of the banner
        banner.style.backgroundImage = `url(${bgImage})`;

        // Update title image source and alt text
        titleImg.src = titleImageSrc;
        titleImg.alt = item.querySelector('img').alt; // Using alt text from the carousel item

        // Update the h4 spans with new content from data-info
        infoTag.innerHTML = infoContent;

        // Update the paragraph text with new content
        paragraphTag.innerHTML = paragraphContent;
    }

    // Loop through each carousel item to add a click event listener
    carouselItems.forEach(item => {
        item.addEventListener('click', () => updateContent(item));
    });

    // Add keyboard event listener for arrow keys
    document.addEventListener('keydown', function(event) {
        if (event.key === "ArrowLeft") {
            instances[0].prev(); // Move to previous slide
        } else if (event.key === "ArrowRight") {
            instances[0].next(); // Move to next slide
        }
    });

    // Add mouse wheel event listener for carousel navigation
    elems[0].addEventListener('wheel', function(event) {
        event.preventDefault();
        if (event.deltaY > 0) {
            instances[0].next(); // Scroll down: Move to the next slide
        } else {
            instances[0].prev(); // Scroll up: Move to the previous slide
        }
    });
});

// Function to toggle video playback
function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
}
