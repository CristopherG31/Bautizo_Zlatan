document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let index = 0;
    const totalImages = document.querySelectorAll('.carousel-images img').length;

    function showImageAtIndex(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener('click', function () {
        index = (index + 1) % totalImages;
        showImageAtIndex(index);
    });

    prevButton.addEventListener('click', function () {
        index = (index - 1 + totalImages) % totalImages;
        showImageAtIndex(index);
    });
});
