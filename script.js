

document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const slider = document.querySelector(".slider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Images array
    const images = [
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
    ];

    // Index to track the current image
    let currentIndex = 0;

    // Display initial image
    updateSlider();

    // Event listeners for buttons
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });

    // Function to update the slider
    function updateSlider() {
        // Clear existing images
        slider.innerHTML = "";

        // Add images to the slider
        images.forEach((imageUrl, index) => {
            const image = document.createElement("img");
            image.src = imageUrl;
            image.alt = `Image ${index + 1}`;
            slider.appendChild(image);
        });

        // Move the slider to the current index
        slider.style.transform = `translateX(-${currentIndex * (100 / images.length)}%)`;
    }
});
