const galleryBtn = document.querySelector('.gallery-btn');
const galleryOverlay = document.querySelector('.gallery-overlay');
const closeGallery = document.querySelector('.close-gallery');
const galleryImage = document.getElementById('gallery-image');

const images = [
    "assets/paintings/painting1.jpg",
    "assets/paintings/painting2.jpg",
    "assets/paintings/painting3.jpg"
];

let currentIndex = 0;

galleryBtn.addEventListener('click', () => {
    galleryOverlay.style.display = "flex";
});

closeGallery.addEventListener('click', () => {
    galleryOverlay.style.display = "none";
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentIndex];
});